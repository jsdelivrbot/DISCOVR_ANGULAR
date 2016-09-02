discovrApp.config(function($translateProvider){
    // Configuración de los idiomas
    $translateProvider.useStaticFilesLoader({
        prefix: 'modules/login/languages/',
        suffix: '.json'
    });
    $translateProvider.useLocalStorage();
    $translateProvider.preferredLanguage('es');
    // here the html tag works
    $translateProvider.useSanitizeValueStrategy('sanitizeParameters');
});
discovrApp.controller('Login.IndexController', function($location,AuthenticationService,$scope,$translate){    
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
                $location.path('/');                    
            }else{
                vm.error = 'username or password is incorrect';
                vm.loading = false;
            }
        });
    };
    $scope.listLan = [
        {'key':'es','value':'Español'},
        {'key':'en','value':'English'}
    ];
    $scope.selected = 'es';    
    $scope.changeLang = function changeLangFn() {
        var opt = $scope.selected;
        $translate.use(opt); 
    };
});    
