var IndexApp = angular.module('PagesApp', ['ngRoute']);

// Configuración de las rutas
IndexApp.config(function($routeProvider) {

    $routeProvider
        .when('/', {
            templateUrl : '../../templates/pages/Plantilla_Inicio.html',
        })

        
/*
         .when('/grupos', {
            templateUrl : '../templates/tesis/grupos.html'

    })

         .when('/feedback', {
            templateUrl : '../templates/tesis/feedback.html'

    })

          .when('/monografia', {
            templateUrl : '../templates/tesis/monografia.html'

    })

      .when('/mensages', {
            templateUrl : '../templates/tesis/mensages.html'

    })

    
      .when('/perfilGrupo', {
            templateUrl : '../templates/tesis/perfilGrupo.html'

    })

          
      .when('/peticion_abandono_grupo', {
            templateUrl : '../templates/tesis/peticion_abandono_grupo.html'

    })*/
 
        .otherwise({
            redirectTo: '/'
        });
});