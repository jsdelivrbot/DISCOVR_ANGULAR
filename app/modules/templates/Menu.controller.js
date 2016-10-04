discovrApp.controller('Menu.IndexController', function($localStorage, $location, AuthenticationService, $scope, $translate) {
    var vm = this;

    initController();


    /*-------------------------------------------------------------------------------------------------*/

    $scope.tree = [{
        name: "Idioma",
        link: "#",
        subtree: [{
            name: "Ingles",
            link: "state1"
        }, {
            name: "Español",
            link: "state2",
        }]
    }, {
        name: "divider",
        link: "#"

    }, {
        name: "Bugs",
        link: "#"
    }, {
        name: "divider",
        link: "#"
    }, {
        name: "Exit",
        link: "login"
    }];
    /*---------------------------------------------------------------------------------------*/
    $scope.tree2 = [{
            name: "Perfil",
            link: "#",

        }, {
            name: "divider",
            link: "#"

        },
        {
            name: "login",
            link: "login"
        }
    ];
});