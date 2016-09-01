var discovrApp = angular.module('DiscovrIndex', ['ui.router','ngMessages','ngStorage','ngCookies','pascalprecht.translate'])
    .constant('apiURL', 'https://discovr-gekkou95.c9users.io/api/')
    .config(config)
    .run(run);

    function config($translateProvider, $stateProvider, $urlRouterProvider) {
        // default route
        $urlRouterProvider.otherwise("/");
         /*
        // Configuración de los idiomas
        $translateProvider.useStaticFilesLoader({
            prefix: 'assets/js/languages/',
            suffix: '.json'
        });
        $translateProvider.useLocalStorage();
        $translateProvider.preferredLanguage('es/es');
        // here the html tag works
        $translateProvider.useSanitizeValueStrategy('sanitizeParameters');*/
        // Configuración de las rutas
        // app routes
         $stateProvider
            .state('home', {
                url: '/',
                templateUrl: 'modules/home/main.view.html',
                controller: 'Home.IndexController',
                controllerAs: 'vm'
            })
            .state('login', {
                url: '/login',
                templateUrl: 'modules/login/index.view.html',
                controller: 'Login.IndexController',
                controllerAs: 'vm'
            });        
    }
    
    function run($rootScope, $http, $location, $localStorage){
       // keep user logged in after page refresh
        if ($localStorage.currentUser) {
            $http.defaults.headers.common.Authorization = 'Bearer ' + $localStorage.currentUser.token;
        }
        // redirect to login page if not logged in and trying to access a restricted page
        $rootScope.$on('$locationChangeStart', function (event, next, current) {
            var publicPages = ['/login'];
            var restrictedPage = publicPages.indexOf($location.path()) === -1;
            if (restrictedPage && !$localStorage.currentUser) {
                $location.path('/login');
            }
        });
    }
    
   