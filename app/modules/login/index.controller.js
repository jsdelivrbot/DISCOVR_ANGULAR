discovrApp.controller('Login.IndexController', function(
    $location,
    $localStorage,
    AuthenticationService,
    $scope,
    $translate){    
    var vm = this;

    vm.login = login;    

    initController();

    function initController(){
        //reset login status
        AuthenticationService.Logout();
    };
    function login(){
        vm.loading = true;
        AuthenticationService.Login(vm.username, vm.password, function(result){
            if(result === true){
                var test = AuthenticationService.GetProfile(2);

                console.log(test);
                console.log("dfalskdfklasjd");
                //GetProfile = JSON.parse(localStorage.getItem('user'));
               
                $location.path('/');                    
            }else{
                vm.error = 'Username or password is incorrect';
                vm.loading = false;
            }
        });
          
          
    };    
    $scope.listLan = [
        {'key':'es-es','value':'Español'},
        {'key':'us-en','value':'English'}
    ];
    $scope.selected = 'es-es';    
    $scope.changeLang = function changeLangFn() {
        var opt = $scope.selected;
         console.log(opt);
        $translate.use('login/languages/' + opt); 
    };
});    
