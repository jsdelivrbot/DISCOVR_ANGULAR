discovrApp.controller('HousingView.IndexController', function(
  $localStorage,
  $location,
  AuthenticationService,
  $scope,
  $uibModal,
  $log,
  $document,
  $translate) {
    var vm = this;
    //local variables
    vm.book = {
      icon: 'library_books',
      tile: 'BookTitle',
      modal: 'book'
    };
    vm.map = {
      icon: 'near_me',
      tile: 'HowToGoingTitle',
      modal: 'map'
    };
    vm.mapInfo = {
      coordinate: "http://www.openstreetmap.org/export/embed.html?bbox=-86.35768353939058%2C13.093481547864359%2C-86.35357439517976%2C13.09663739897683&amp;layer=mapnik",
      address: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
    };
    vm.bookInfo = {

    };
    function initController() {
        vm.username = $localStorage.currentUser.username;
        $translate.use('housing/languages/' + browserLan);
        console.log(browserLan);
        /*
        var stLan = localStorage.getItem('NG_TRANSLATE_LANG_KEY');
        var szLanLan = stLan.length;
        var lang = stLan.substr((szLanLan - 5), szLanLan);
        localStorage.setItem('NG_TRANSLATE_LANG_KEY', 'housing/languages/' + lang);*/
    };
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
    vm.changeLang = function changeLangFn(opt) {
         console.log(opt);
        $translate.use('housing/languages/' + opt);
    };
    $scope.tabIndex = 0;
    $scope.tabs = [
    { title:'Dynamic Title 1', content:'Dynamic content 1' },
    { title:'Dynamic Title 2', content:'Dynamic content 2', disabled: true }
  ];
    $scope.setIndex = function($index){
      $scope.tabIndex = $index;
    }
    vm.animationsEnabled = true;
    $scope.isNavCollapsed = true;
    $scope.isCollapsed = false;
    $scope.isCollapsedHorizontal = false;


    /*$scope.dataArray = [
      {
        src: 'https://exp.cdn-hotels.com/hotels/7000000/6980000/6975400/6975392/6975392_10_z.jpg'
      },
      {
        src: 'http://www.hotelhex.com/Esteli/img/Fondo/06.jpg'
      },
      {
        src: 'http://www.hotelhex.com/Esteli/img/Fondo/01.jpg'
      },
      {
        src: 'http://q-ec.bstatic.com/images/hotel/840x460/254/25489577.jpg'
      },
      {
        src: 'http://endimages.s3.amazonaws.com/legacy/1355009715_RUTA%20CA%C3%91ON%20DE%20SOMOTO%20091212.jpg'
      },
      {
        src: 'http://trunkweed.com/uploads/posts/images/590341-blue-panoramic-nature-background.jpg'
      },
      {
        src: 'http://trunkweed.com/uploads/posts/images/590341-blue-panoramic-nature-background.jpg'
      }
    ];*/

    $scope.myInterval = 15000;
    $scope.noWrapSlides = false;
    $scope.active = 0;
    var slides = $scope.slides = [{
            image: 'https://exp.cdn-hotels.com/hotels/7000000/6980000/6975400/6975392/6975392_10_z.jpg',
            id: 0,
            name: "Example Name"
        },
        {
            image: 'http://www.hotelhex.com/Esteli/img/Fondo/06.jpg',
            id: 1,
            name: "Example Name"
        }
    ];
    var currIndex = 0;

    initController();
});
