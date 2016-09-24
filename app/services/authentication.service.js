discovrApp.factory('AuthenticationService', function (
  $http,
  $rootScope,
  $localStorage,
  jwtHelper,
  apiURL){
  var service = {};
  //var apiURL= 'https://discovr-gekkou95.c9users.io/api/';

  var config = {headers:  {
          Authorization: '',
          'Content-Type': 'application/json'
      }
  };

  service.Login = Login;
  service.Logout = Logout;
  service.SignUp = SignUp;

  service.Profile = Profile;
  service.ChangePassword = ChangePassword;
  service.ResetPassword = ResetPassword;
  service.GetProfile = GetProfile;
  //service.SignUp = SignUp;
  //service.SignUp = SignUp;


  return service;

  function Login(username,password,callback) {
    $http.post(apiURL + 'api/rest/auth/login/', { username: username, password: password })
      .success(function(response){
        //login successful if there's a token in the respose
        if(response.token){
          //decode token, to get the user id insert on payload
          var token = jwtHelper.decodeToken(response.token);
          var userProfile = 0;
          userProfile = GetProfile(token.user_id);
          console.log(userProfile);
          //store username and token in local storage to keep user logged in between paga refreshes
          $localStorage.currentUser = {id: token.user_id, username: username, token: response.token };
          //config.headers.Authorization = 'JWT ' + response.token;
          //add jwt token to auth header for all requests made by the $http services
          $http.defaults.headers.common.Authorization = 'JWT ' + response.token;
          //execuete callback with true to indicate successful login
          callback(true);
        }else{
          //execute callback with false to indicate failed login
          callback(false);
        }
      });
  }

  function Logout() {
    $http.post(apiURL + 'api/rest/auth/logout/')
      .success(function(response){
        //remove user from local storage and clear http auth header
        delete $localStorage.currentUser;
        localStorage.removeItem('user');
        config.headers.Authorization = '';
        $http.defaults.headers.common.Authorization = '';
      });
    
  }

  function SignUp(callback,username,password1,password2,email,more){
    $http.post(apiURL + 'api/rest/auth/registration/', { username: username, password1: password1, password2: password2, email: email})
      .success(function(response){
        //login successful if there's a token in the respose
        if(response.token){
          console.log(response.token);
          //store username and token in local storage to keep user logged in between paga refreshes
          $localStorage.currentUser = { username: username, token: response.token };
          //add jwt token to auth header for all requests made by the $http services
          $http.defaults.headers.common.Authorization = 'JWT ' + response.token;
          //execuete callback with true to indicate successful login
          callback(true);
        }else{
          //execute callback with false to indicate failed login
          callback(false);
        }
      });
  }

  function Profile(){
    $http.get(apiURL + 'api/user/' + $localStorage.currentUser.id + '/').
      then(function successCallback(response) {
          localStorage.setItem('user', JSON.stringify(response.data));
          console.log(response.data)
      }, function errorCallback(response) {
          console.log(response);
      });
  }

  function GetProfile(id){
    $http.get(apiURL + 'api/user/' + id + '/').
    then(function successCallback(response){
      $rootScope.userProfile = response.data.Kind;
      localStorage.setItem('profile', $rootScope.userProfile);
      //console.log(($rootScope.userProfile = response.data.Kind)); 
    });     
    return $rootScope.userProfile;
  }

  function ChangePassword(){

  }

  function ResetPassword(){

  }

  function Verify(){

  }

  function ConfirmReset(){

  }

});