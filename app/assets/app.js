var discovrApp = angular.module('DiscovrIndex', ['ngRoute','pascalprecht.translate'])
    .config(function($translateProvider, $routeProvider) {
        // Configuración de los idiomas
        $translateProvider.useStaticFilesLoader({
            prefix: 'assets/js/languages/',
            suffix: '.json'
        });
        //$translateProvider.useLocalStorage();
        $translateProvider.preferredLanguage('es/es');
        // Configuración de las rutas
        $routeProvider
            .when('/', {
                templateUrl : '../assets/templates/loguin.html',
            })
        /*  .when('/recuperar', {
                templateUrl : 'templates/recuperar_contrasenia.html'            
            })
        */
            .otherwise({
                redirectTo: '/'
            });
    })
    .controller('MainController', function($scope, $translate){
       $scope.changeLang = function changeLangFn(langKey) {
            $translate.use(langKey);
       };
    });