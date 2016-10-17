discovrApp.controller('Home.IndexController', function(
    $localStorage,
    $location,
    AuthenticationService,
    $scope,
    $translate) {

    var vm = this;
    //local variables
    vm.profile = profile;
    vm.getProfile = getProfile;

    //Start Function
    function initController() {
        vm.username = $localStorage.currentUser.username;
        var stLan = localStorage.getItem('NG_TRANSLATE_LANG_KEY');
        var szLanLan = stLan.length;
        var lang = stLan.substr((szLanLan - 5), szLanLan);
        localStorage.setItem('NG_TRANSLATE_LANG_KEY', 'home/languages/' + lang);
    };

    function getProfile(){
        AuthenticationService.GetProfile($localStorage.currentUser.id).then(function(dt){
            console.log(dt);
        });
    }

    function profile(){
        AuthenticationService.Profile();
    }
    //languages options
    vm.listLan = [
        {'key':'es-es','value':'Español'},
        {'key':'en-us','value':'English'}
    ];

    var browserLan = navigator.language; //Get browser language
    if (browserLan === 'es' || browserLan === 'es-es' || browserLan === 'es-NI'){
        browserLan = 'es-es';
    }else if(browserLan === 'en' || browserLan === 'en-us' || browserLan === 'en-US') {
        browserLan = 'en-us';
    }else{
        browserLan = 'es-es';
    }
    //Get the selected user language and set at the begining the browser default language
    vm.selected = browserLan;
    //Function that change the language
    vm.changeLang = function changeLangFn() {
        var opt = vm.selected;
         console.log(opt);
        $translate.use('login/languages/' + opt);
    };

    $scope.myInterval = 6000;
    $scope.noWrapSlides = false;
    $scope.active = 0;
    var slides = $scope.slides = [{
            image: '../../assets/files/img/main/prinsipalSlider/1.jpg',
            id: 0
        },
        {
            image: '../../assets/files/img/main/prinsipalSlider/2.jpg',
            id: 1
        },
        {
            image: '../../assets/files/img/main/prinsipalSlider/3.jpg',
            id: 2
        },
        {
            image: '../../assets/files/img/main/prinsipalSlider/4.jpg',
            id: 3
        },
        {
            image: '../../assets/files/img/main/prinsipalSlider/5.jpg',
            id: 4
        },
        {
            image: '../../assets/files/img/main/prinsipalSlider/6.jpg',
            id: 5
        }
    ];
    var currIndex = 0;
    /*------------------------------------------------------------------------------------------------*/
    $scope.myInterval1 = 6800;
    $scope.noWrapSlides1 = false;
    $scope.active1 = 0;
    var slides1 = $scope.slides1 = [{
            image: '../../assets/files/img/main/eventos/1.jpg',
            id: 0
        },
        {
            image: '../../assets/files/img/main/eventos/2.jpg',
            id: 1
        },
        {
            image: '../../assets/files/img/main/eventos/3.jpg',
            id: 2
        }
    ];
    var currIndex = 0;
    /*-------------------------------------------------------------------------------------------------*/
    $scope.myInterval2 = 3000;
    $scope.noWrapSlides2 = false;
    $scope.active2 = 0;
    var slides2 = $scope.slides2 = [{
            image: '../../assets/files/img/main/dondeIr/1.jpg',
            id: 0
        },
        {
            image: '../../assets/files/img/main/dondeIr/2.jpg',
            id: 1
        },
        {
            image: '../../assets/files/img/main/dondeIr/3.jpg',
            id: 2
        }
    ];
    var currIndex = 0;

    /*-------------------------------------------------------------------------------------------------*/
    $scope.myInterval3 = 4500;
    $scope.noWrapSlides3 = false;
    $scope.active3 = 0;
    var slides3 = $scope.slides3 = [{
            image: '../../assets/files/img/main/galeria/1.jpg',
            id: 0
        },
        {
            image: '../../assets/files/img/main/galeria/2.jpg',
            id: 1
        },
        {
            image: '../../assets/files/img/main/galeria/3.jpg',
            id: 2
        },
        {
            image: '../../assets/files/img/main/galeria/4.jpg',
            id: 3
        }
    ];
    var currIndex = 0;

    /*-------------------------------------------------------------------------------------------------*/
    $scope.myInterval4 = 5100;
    $scope.noWrapSlides4 = false;
    $scope.active4 = 0;
    var slides4 = $scope.slides4 = [{
            image: '../../assets/files/img/main/alojamiento/1.jpg',
            id: 0
        },
        {
            image: '../../assets/files/img/main/alojamiento/2.jpg',
            id: 1
        },
        {
            image: '../../assets/files/img/main/alojamiento/3.jpg',
            id: 2
        },
        {
            image: '../../assets/files/img/main/alojamiento/4.jpg',
            id: 3
        }
    ];
    var currIndex = 0;

    /*-------------------------------------------------------------------------------------------------*/
    $scope.myInterval5 = 5700;
    $scope.noWrapSlides5 = false;
    $scope.active5 = 0;
    var slides5 = $scope.slides5 = [{
            image: '../../assets/files/img/main/tiendas/1.jpg',
            id: 0
        },
        {
            image: '../../assets/files/img/main/tiendas/2.jpg',
            id: 1
        },
        {
            image: '../../assets/files/img/main/tiendas/3.jpg',
            id: 2
        },
        {
            image: '../../assets/files/img/main/tiendas/4.jpg',
            id: 3
        }
    ];
    var currIndex = 0;


    /*-------------------------------------------------------------------------------------------------*/
    $scope.myInterval6 = 7700;
    $scope.noWrapSlides6 = false;
    $scope.active6 = 0;
    var slides6 = $scope.slides6 = [{
            image: '../../assets/files/img/main/entretenimiento/1.jpg',
            id: 0
        },
        {
            image: '../../assets/files/img/main/entretenimiento/2.jpg',
            id: 1
        },
        {
            image: '../../assets/files/img/main/entretenimiento/3.jpg',
            id: 2
        },
        {
            image: '../../assets/files/img/main/entretenimiento/4.jpg',
            id: 3
        },

        {
            image: '../../assets/files/img/main/entretenimiento/4.jpg',
            id: 4
        }
    ];
    var currIndex = 0;

    /*-------------------------------------------------------------------------------------------------*/
    $scope.myInterval7 = 6700;
    $scope.noWrapSlides7 = false;
    $scope.active7 = 0;
    var slides7 = $scope.slides7 = [{
            image: '../../assets/files/img/main/comidasBebidas/1.jpg',
            id: 0
        },
        {
            image: '../../assets/files/img/main/comidasBebidas/2.jpg',
            id: 1
        },
        {
            image: '../../assets/files/img/main/comidasBebidas/3.jpg',
            id: 2
        }
    ];
    var currIndex = 0;

    /*-------------------------------------------------------------------------------------------------*/

    $scope.myInterval8 = 7100;
    $scope.noWrapSlides8 = false;
    $scope.active8 = 0;
    var slides8 = $scope.slides8 = [{
            image: '../../assets/files/img/main/promocionesDescuentos/1.jpg',
            id: 0
        },
        {
            image: '../../assets/files/img/main/promocionesDescuentos/2.jpg',
            id: 1
        }
    ];
    var currIndex = 0;

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

    $scope.items = [
        'The first choice!',
        'And another choice for you.',
        'but wait! A third!'
    ];

    $scope.status = {
        isopen: false
    };

    $scope.toggled = function(open) {
        $log.log('Dropdown is now: ', open);
    };

    $scope.toggleDropdown = function($event) {
        $event.preventDefault();
        $event.stopPropagation();
        $scope.status.isopen = !$scope.status.isopen;
    };

    $scope.appendToEl = angular.element(document.querySelector('#dropdown-long-content'));

    initController();
});
