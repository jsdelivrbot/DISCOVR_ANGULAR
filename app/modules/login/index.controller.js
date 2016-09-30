discovrApp.controller('Login.IndexController', function(
    $location,
    $localStorage,
    AuthenticationService,
    $scope,
    $translate){    
    var vm = this;

    vm.login = login;
    vm.redirect = redirect;     

    initController();

    function initController(){
        //reset login status
        AuthenticationService.Logout();
    };
    function login(){
        vm.loading = true;
        AuthenticationService.Login(vm.username, vm.password, function(result){
            if(result === true){
                AuthenticationService.GetProfile($localStorage.currentUser.id).then(function(dt){
                    console.log(dt);
                    if(dt === 1){
                        $location.path('/');
                    }else if(dt === 2){
                        console.log("Nestor es un genio!");
                        $location.path('/');
                    }
                });  
                //GetProfile = JSON.parse(localStorage.getItem('user'));
               
                                    
            }else{
                vm.error = 'Username or password is incorrect';
                vm.loading = false;
            }
        });
                    
    };  
    function redirect(){
        console.log("Good luck!");
        $location.path('/signup');
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
