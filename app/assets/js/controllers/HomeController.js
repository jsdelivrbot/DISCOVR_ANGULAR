var discovrApp = angular.module('DiscovrMain', ['ngRoute','pascalprecht.translate'])
    .config(function($translateProvider,$routeProvider) {
        // Configuración de los idiomas
        $translateProvider.useStaticFilesLoader({
            prefix: '../../../assets/js/languages/',
            suffix: '.json'
        });
        //$translateProvider.useLocalStorage();
        $translateProvider.preferredLanguage('es/es');
        // Configuración de las rutas
        $routeProvider
             .when('/', {
                templateUrl : '../../../assets/templates/pages/Main/Main.html',
             })   
             .otherwise({
                redirectTo: '/'
             });
     })
     .controller('MainController', function($scope, $translate){
       $scope.listLan = ['Español', 'English','français'];
       $scope.changeLang = function changeLangFn() {
           $translate.use($scope.listLan);
       };
    });