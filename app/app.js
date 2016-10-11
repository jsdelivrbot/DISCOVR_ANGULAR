var discovrApp = angular.module('DiscovrIndex', [
    'ui.bootstrap',
    'ngAnimate',
    'ui.router',
    'ngMessages',
    'ngStorage',
    'ngCookies',
    'angular-jwt',
    'ui.navbar',
    'pascalprecht.translate'])
    .constant('apiURL', 'https://discovr-gekkou95.c9users.io/')
    .config(config)
    .run(run);
    function config($stateProvider, $urlRouterProvider,$translateProvider) {
        // Configuración de los idiomas
        var browserLan = navigator.language; //Obtiene el idioma del Navegador
        console.log(browserLan);
        if (browserLan === 'es' || browserLan === 'es-es' || browserLan === 'es-NI'){
            browserLan = 'es-es';
        }else if(browserLan === 'en' || browserLan === 'en-us' || browserLan === 'en-US') {
            browserLan = 'en-us';
        }else{
            browserLan = 'es-es';
        }

        $translateProvider.useStaticFilesLoader({
            prefix: 'modules/',
            suffix: '.json'
        });
        $translateProvider.useLocalStorage();
        $translateProvider.preferredLanguage('login/languages/' + browserLan);
        // here the html tag works
        $translateProvider.useSanitizeValueStrategy('sanitizeParameters');
        // Configuración de las rutas
        // app routes
         $stateProvider
            .state('home', {
                url: '/',
                templateUrl: 'modules/home/main.view.html',
                controller: 'Home.IndexController',
                controllerAs: 'vm'
            })
             
            .state('signup', {
                url: '/signup',
                templateUrl: 'modules/signup/index.view.html',
                controller: 'Signup.IndexController',
                controllerAs: 'vm'
            })

            .state('signup.profile', {
                url: '/profile',
                templateUrl: 'modules/signup/profile.view.html'
            })

            .state('signup.preference', {
                url: '/preference',
                templateUrl: 'modules/signup/preference.view.html'
            })

            .state('signup.payment', {
                url: '/payment',
                templateUrl: 'modules/signup/payment.view.html'
            })

            .state('login', {
                url: '/login',
                templateUrl: 'modules/login/index.view.html',
                controller: 'Login.IndexController',
                controllerAs: 'vm'
            })
  
            .state('housing', {
                url: '/housing',
                templateUrl: 'modules/housing/housing.view.html',
                controller: 'Housing.IndexController',
                controllerAs: 'vm'
            
            })
            
            .state('Specifichousing', {
                url: '/Specifichousing',
                templateUrl: 'modules/housing/SpecificHousing/SpecificHousing.view.html',
                controller: 'SpecificHousing.IndexController',
                controllerAs: 'vm'

            });

         // default route
        $urlRouterProvider.otherwise("/");       
    }
    
    function run($rootScope, $http, $location, $localStorage){
       // keep user logged in after page refresh
        if ($localStorage.currentUser) {
            $http.defaults.headers.common.Authorization = 'JWT ' + $localStorage.currentUser.token;
        }
    // redirect to login page if not logged in and trying to access a restricted page
    $rootScope.$on('$locationChangeStart', function(event, next, current) {
        var publicPages = ['/login'];
        var restrictedPage = publicPages.indexOf($location.path()) === -1;
        if (restrictedPage && !$localStorage.currentUser) {
            $location.path('/login');
        }
    });
}
//Auto-logout if any unauthorised web api request is made
discovrApp.config(['$provide', '$httpProvider', function($provide, $httpProvider) {

    $provide.factory('unauthorisedInterceptor', ['$q', function($q) {
        return {
            'responseError': function(rejection) {
                if (rejection.status === 401) {
                    window.location.href = '/#/login';
                }
                return $q.reject(rejection);
            }
        };
    }]);

    $httpProvider.interceptors.push('unauthorisedInterceptor');
}]);