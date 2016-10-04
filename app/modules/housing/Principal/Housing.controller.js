discovrApp.controller('Housing.IndexController', function($localStorage, $location, AuthenticationService, $scope, $translate) {
    var vm = this;

    vm.move = move;

    initController();

    function initController() {
        vm.username = $localStorage.currentUser.username;
        var stLan = localStorage.getItem('NG_TRANSLATE_LANG_KEY');
        var szLanLan = stLan.length;
        var lang = stLan.substr((szLanLan - 5), szLanLan);
        localStorage.setItem('NG_TRANSLATE_LANG_KEY', 'housing/SpecificHousing/languages/' + lang);
    };
    var position = 0;
    var moduleCount = document.querySelector(".module").length;
    function move(number){
        if (number) {
        position += number;
            if (number == 0 || number > moduleCount) {
                position = 0;            
            }
        console.log(moduleCount);
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

    $scope.listLan = [
        { 'key': 'es-es', 'value': 'Español' },
        { 'key': 'us-en', 'value': 'English' }
    ];
    $scope.selected = 'es-es';
    $scope.changeLang = function changeLangFn() {
        var opt = $scope.listLan.key;
        console.log(opt);
        $translate.use('housing/languages/' + opt);
    };

    $scope.myInterval = 5000;
    $scope.noWrapSlides = false;
    $scope.active = 0;
    var slides = $scope.slides = [{
            image: 'https://exp.cdn-hotels.com/hotels/7000000/6980000/6975400/6975392/6975392_10_z.jpg',
            id: 0
        },
        {
            image: 'http://www.hotelhex.com/Esteli/img/Fondo/06.jpg',
            id: 1
        }
    ];
    var currIndex = 0;
});