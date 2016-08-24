var discovrApp = angular.module('DiscovrMain', ['ngCookies','ngRoute','pascalprecht.translate'])
    .config(function($translateProvider,$routeProvider) {
        // Configuración de los idiomas
        $translateProvider.useStaticFilesLoader({
            prefix: '../../../assets/js/languages/',
            suffix: '.json'
        });
        $translateProvider.useLocalStorage();
        $translateProvider.preferredLanguage('es/es');
        // here the html tag works
        $translateProvider.useSanitizeValueStrategy('sanitizeParameters');
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
<<<<<<< HEAD
       $scope.listLan = ['es/es', 'en/en','fr/fr'];
       $scope.changeLang = function changeLangFn() {
           $translate.use($scope.listLan);
       };
=======
       $scope.listLan = ['es/es', 'en/en', 'fr/fr'];
       $scope.changeLang = function changeLangFn() {
           $translate.use($scope.listLan);
        };
>>>>>>> refs/remotes/origin/logic
    });