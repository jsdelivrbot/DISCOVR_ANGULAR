discovrApp.factory('AuthenticationService', function (
  $http,
  $filter,
  $localStorage,
  jwtHelper,
  $q,
  apiURL){
  var service = {};

  //Services Functions
  service.Login = Login;
  service.Logout = Logout;
  service.SignUp = SignUp;

  service.Profile = Profile;
  service.ChangePassword = ChangePassword;
  service.ResetPassword = ResetPassword;
  service.GetProfile = GetProfile;
  service.GetData = GetData;
  service.GetDataId = GetDataId;
  //service.SignUp = SignUp;

  return service;

  //Login function
  function Login(username,password,callback) {
    $http.post(apiURL + 'api/rest/auth/login/', { username: username, password: password })
      .success(function(response){
        //login successful if there's a token in the respose
        if(response.token){
          //decode token, to get the user id insert on payload
          var token = jwtHelper.decodeToken(response.token);
          var profile;
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
  //SignUp Function
  function SignUp(username,password1,password2,email,name,surname,phone,birthday,genre,city,callback){
    $http.post(apiURL + 'api/rest/auth/registration/', { username: username, email: email, password1: password1, password2: password2})
      .success(function(response){
        //login successful if there's a token in the respose
        if(response.token){
          //decode token, to get the user id insert on payload
          var token = jwtHelper.decodeToken(response.token);
          var client; //get client info
          var tourist; //get tourist info
          //Call CreateClient function and return de Create Client Data
          CreateClient(name,surname,birthday,genre,city).then(function(dt){
            client = dt;
            CreateTourist(token.user_id, client.IdClient).then(function(dt){
              tourist =  dt;
              //Storage client and tourist data
              localStorage.setItem('client', client);
              localStorage.setItem('tourist', tourist);
            });
          });
          //store username and token in local storage to keep user logged in between paga refreshes
          $localStorage.currentUser = {id: token.user_id, username: username, tourist: tourist, token: response.token };
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
  //Logout User
  function Logout() {
    $http.post(apiURL + 'api/rest/auth/logout/')
      .success(function(response){
        //remove user from local storage and clear http auth header
        delete $localStorage.currentUser;
        localStorage.removeItem('user');
        localStorage.removeItem('tourist');
        localStorage.removeItem('client');
        localStorage.removeItem('profile');
        $http.defaults.headers.common.Authorization = '';
      });

  }
  //Profile Data
  function Profile(){
    $http.get(apiURL + 'api/user/' + $localStorage.currentUser.id + '/').
      then(function successCallback(response) {
          localStorage.setItem('user', JSON.stringify(response.data));
          //console.log(response.data)
      }, function errorCallback(response) {
          //console.log(response);
      });
  }
  //Get user Profile
  function GetProfile(id){
    var deferred = $q.defer();
    $http.get(apiURL + 'api/user/' + id + '/').
    then(function successCallback(response){
      deferred.resolve(response.data.Kind);
    });
    return deferred.promise;
  }
  //Get Data from API URLs
  function GetData(table){
    var deferred = $q.defer();
    $http.get(apiURL + 'api/' + table + '/').
    then(function successCallback(response){
      deferred.resolve(response.data);
    });
    //onsole.log(deferred.promise);
    return deferred.promise;
  }
  //Get ID form API URLs
  function GetDataId(table,id){
    var deferred = $q.defer();
    $http.get(apiURL + 'api/' + table + '/' + id + '/').
    then(function successCallback(response){
      deferred.resolve(response.data);
    });
    return deferred.promise;
  }
  //Create tourist
  function CreateTourist(user_id, client_id){
    var deferred = $q.defer();
    $http.post(apiURL + 'api/tourist/create/', {Owner: user_id, IdClient: client_id} ).
    then(function successCallback(response){
      deferred.resolve(response.data);
    });
    return deferred.promise;
  }
  //Create Client
  function CreateClient(name, surname,birthday,genre,city){
    var deferred = $q.defer();
    var filteredData = '';
    $http.post(apiURL + 'api/client/create/', { Genre: genre, Name: name, Surname: surname, BirthDate:birthday, IdCity: city } ).
    then(function successCallback(response){
      deferred.resolve(response.data);
      //var client = GetData('client');
      //filteredData = $filter('filter')(client, {data: {Genre: genre, Name: name, Surname: surname, BirthDate:birthday, IdCity: city}});
    });
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