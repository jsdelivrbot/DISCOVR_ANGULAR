discovrApp.controller('Housing.IndexController', function(
  $localStorage,
  $location,
  AuthenticationService,
  $scope,
  $translate) {
    var vm = this;
    //local variables
    vm.move = move;

    // -- -- - ---- - - -Funcion para desplazar filtros
    var position = 0;
    var moduleCount = document.querySelector(".module").length;
    function move(number){
        if (number) {
        position += number;
            if (number == 0 || number > moduleCount) {
                position = 0;
            }
        } else {
            if (position <= 4) {
                position++;
            } else {
                position = 0;
            }
        }
        moduleOffset =  document.querySelector(".module").offsetWidth;
        filler = document.querySelector("#filler");
        filler.style.left = -( position* moduleOffset) + "px";
    }
    // -- -- - ---- - - - FIN Funcion para desplazar filtros
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
    vm.changeLang = function changeLangFn(opt) {
         console.log(opt);
        $translate.use('housing/languages/' + opt);
    };

    $scope.myInterval = 5000;
    $scope.noWrapSlides = false;
    $scope.active = 0;
    var slides = $scope.slides = [{
            image: 'https://exp.cdn-hotels.com/hotels/7000000/6980000/6975400/6975392/6975392_10_z.jpg',
            id: 0,
            name: "Example Test Name 1"
        },
        {
            image: 'http://www.hotelhex.com/Esteli/img/Fondo/06.jpg',
            id: 1,
            name: "Example Test Name 2"
        },
        {
            image: 'https://media-cdn.tripadvisor.com/media/photo-s/08/cd/99/1a/hard-rock-hotel-ibiza.jpg',
            id: 2,
            name: "Example Test Name 3"
        },
        {
            image: 'https://images.trvl-media.com/media/content/expus/graphics/launch/hotel1320x742.jpg',
            id: 3,
            name: "Example Test Name 4"
        },
        {
            image: 'https://media-cdn.tripadvisor.com/media/photo-s/03/0c/2e/fe/hotel-ibis-hermosillo.jpg',
            id: 4,
            name: "Example Test Name 5"
        },
        {
            image: 'http://a.otcdn.com/headers/ilusion/img/hoteles_destinia.jpg',
            id: 5,
            name: "Example Test Name 6"
        }
    ];
    var currIndex = 0;
    initController();

    function initController() {
        vm.username = $localStorage.currentUser.username;
        var stLan = localStorage.getItem('NG_TRANSLATE_LANG_KEY');
        var szLanLan = stLan.length;
        var lang = stLan.substr((szLanLan - 5), szLanLan);
        localStorage.setItem('NG_TRANSLATE_LANG_KEY', 'housing/languages/' + lang);
    };
});
