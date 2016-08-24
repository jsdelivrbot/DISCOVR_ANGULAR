
	// Creación del módulo
var IndexApp = angular.module('IndexApp', ['ngRoute']);

// Configuración de las rutas
IndexApp.config(function($routeProvider) {

    $routeProvider
        .when('/', {
            templateUrl : 'templates/loguin.html',
        })

    /*    .when('/recuperar', {
            templateUrl : 'templates/recuperar_contrasenia.html'
           
        })
*/
 
        .otherwise({
            redirectTo: '/'
        });
});

