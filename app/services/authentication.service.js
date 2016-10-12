discovrApp.factory('AuthenticationService', function (
  $http,
  $filter,
  $localStorage,
  jwtHelper,
  $q,
  apiURL){
  var service = {};


  service.Login = Login;
  service.Logout = Logout;
  service.SignUp = SignUp;

  service.Profile = Profile;
  service.ChangePassword = ChangePassword;
  service.ResetPassword = ResetPassword;
  service.GetProfile = GetProfile;
  service.GetData = GetData;
  //service.SignUp = SignUp;

  return service;

  function Login(username,password,callback) {
    $http.post(apiURL + 'api/rest/auth/login/', { username: username, password: password })
      .success(function(response){
        //login successful if there's a token in the respose
        if(response.token){
          //decode token, to get the user id insert on payload
          var token = jwtHelper.decodeToken(response.token);
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

  function SignUp(username,password1,password2,email,name,surname,phone,birthday,genre,city,callback){
    $http.post(apiURL + 'api/rest/auth/registration/', { username: username, email: email, password1: password1, password2: password2})
      .success(function(response){
        //login successful if there's a token in the respose
        if(response.token){
          //decode token, to get the user id insert on payload
          var token = jwtHelper.decodeToken(response.token);
          //store username and token in local storage to keep user logged in between paga refreshes
          $localStorage.currentUser = {id: token.user_id, username: username, token: response.token };
          var client = CreateClient(name,surname,birthday,genre,city);
          console.log(client);
          CreateTourist(token.user_id, client.id);
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
        $http.defaults.headers.common.Authorization = '';
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
    var deferred = $q.defer();
    $http.get(apiURL + 'api/user/' + id + '/').
    then(function successCallback(response){
      deferred.resolve(response.data.Kind);
      localStorage.setItem('user', deferred.promise);
    });
    return deferred.promise;
  }

  function GetData(table){
    var deferred = $q.defer();
    $http.get(apiURL + 'api/' + table + '/').
    then(function successCallback(response){
      deferred.resolve(response.data);
    });
    //onsole.log(deferred.promise);
    return deferred.promise;
  }

  function GetDataId(table,id){
    var deferred = $q.defer();
    $http.get(apiURL + 'api/' + table + '/').
    then(function successCallback(response){
      deferred.resolve(response.data);
    });
    return deferred.promise;
  }

  function CreateTourist(user_id, client_id){
    var deferred = $q.defer();
    $http.post(apiURL + 'api/tourist/create/', {Owner: user_id, IdClient: client_id} ).
    then(function successCallback(response){
      deferred.resolve(response.data);
    });
    console.log(deferred.promise);
    return deferred.promise;
  }

  function CreateClient(name, surname,birthday,genre,city){
    var deferred = $q.defer();
    var filteredData = '';
    $http.post(apiURL + 'api/client/create/', { Genre: genre, Name: name, Surname: surname, BirthDate:birthday, IdCity: city } ).
    then(function successCallback(response){
      deferred.resolve(response.data);
      //var client = GetData('client');
      //filteredData = $filter('filter')(client, {data: {Genre: genre, Name: name, Surname: surname, BirthDate:birthday, IdCity: city}});
    });
    console.log(deferred.promise);
    return deferred.promise;
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
