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
discovrApp.controller('Login.IndexController', function($location,AuthenticationService,$scope, $translate){    
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
    $scope.listLan = ['es', 'en'];
    $scope.changeLang = function changeLangFn() {
        $translate.use($scope.listLan);
    };
});    
