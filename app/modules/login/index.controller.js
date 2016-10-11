discovrApp.controller('Login.IndexController', function(
    $location,
    $localStorage,
    AuthenticationService,
    $scope,
    $translate){    
    var vm = this;

    vm.login = login;
    vm.redirect = redirect;    

    function initController(){
        //reset login status
        AuthenticationService.Logout();
    };
    function login(){
        //vm.loading = true;
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

    vm.listLan = [
        {'key':'es-es','value':'Español'},
        {'key':'en-us','value':'English'}
    ];
    
    var browserLan = navigator.language; //Obtiene el idioma del Navegador
    if (browserLan === 'es' || browserLan === 'es-es' || browserLan === 'es-NI'){
        browserLan = 'es-es';
    }else if(browserLan === 'en' || browserLan === 'en-us' || browserLan === 'en-US') {
        browserLan = 'en-us';
    }else{
        browserLan = 'es-es';
    }
    vm.selected = browserLan;    
    vm.changeLang = function changeLangFn() {
        var opt = vm.selected;
         console.log(opt);
        $translate.use('login/languages/' + opt); 
    };

    initController();
});    
