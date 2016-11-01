discovrApp.controller('Store.IndexController', function(
    $localStorage,
    $location,
    AuthenticationService,
    $scope,
    $translate) {
    var vm = this;

    vm.move = move;

    initController();

    function initController() {
        vm.username = $localStorage.currentUser.username;
        var stLan = localStorage.getItem('NG_TRANSLATE_LANG_KEY');
        var szLanLan = stLan.length;
        var lang = stLan.substr((szLanLan - 5), szLanLan);
        localStorage.setItem('NG_TRANSLATE_LANG_KEY', 'store/languages/' + lang);
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
        $translate.use('store/languages/' + opt);
    };

    $scope.myInterval = 5000;
    $scope.noWrapSlides = false;
    $scope.active = 0;
    var slides = $scope.slides = [{
            image: 'http://cdn.laprensa.com.ni/wp-content/uploads/2013/12/1386730756_111213ambNota2photo01.jpg',
            id: 0
        },
        {
            image: 'http://endimages.s3.amazonaws.com/cache/7e/1c/7e1cf2abc575d745ba79520263f64cd2.jpg',
            id: 1
        },
         {
            image: 'http://endimages.s3.amazonaws.com/cache/56/5b/565b60aaf5375256245a263dfe2847bf.jpg',
            id: 2
        }
    ];
    var currIndex = 0;
});