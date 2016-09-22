discovrApp.controller('Home.IndexController', function($localStorage,$location,AuthenticationService,$scope,$translate) {
    var vm = this;
 
    initController();

    function initController() {
        vm.username = $localStorage.currentUser.username;
        var stLan = localStorage.getItem('NG_TRANSLATE_LANG_KEY');
        var szLanLan = stLan.length;
        var lang = stLan.substr((szLanLan-5),szLanLan);
        localStorage.setItem('NG_TRANSLATE_LANG_KEY','home/languages/' + lang);
    };
    $scope.listLan = [
        {'key':'es-es','value':'Español'},
        {'key':'us-en','value':'English'}
    ];
    $scope.selected = 'es-es';    
    $scope.changeLang = function changeLangFn() {
        var opt = $scope.listLan.key;
        console.log(opt);
        $translate.use('home/languages/' + opt); 
    };

    $scope.myInterval = 5000;
    $scope.noWrapSlides = false;
    $scope.active = 0;
    var slides = $scope.slides = [
        {image: '../../assets/files/img/main/prinsipalSlider/1.jpg',
      id: 0},
      {image: '../../assets/files/img/main/prinsipalSlider/2.jpg',
      id: 1},
      {image: '../../assets/files/img/main/prinsipalSlider/3.jpg',
      id: 2},
      {image: '../../assets/files/img/main/prinsipalSlider/4.jpg',
      id: 3},
      {image: '../../assets/files/img/main/prinsipalSlider/5.jpg',
      id: 4},
       {image: '../../assets/files/img/main/prinsipalSlider/6.jpg',
      id: 5}
    ];
    var currIndex = 0;
/*------------------------------------------------------------------------------------------------*/
    $scope.myInterval1 = 4000;
    $scope.noWrapSlides1 = false;
    $scope.active1 = 0;
    var slides1 = $scope.slides1 = [
        {image: '../../assets/files/img/main/eventos/1.jpg',
      id: 0},
      {image: '../../assets/files/img/main/eventos/2.jpg',
      id: 1},
      {image: '../../assets/files/img/main/eventos/3.jpg',
      id: 2}
    ];
    var currIndex = 0;
/*-------------------------------------------------------------------------------------------------*/
     $scope.myInterval2 = 3000;
    $scope.noWrapSlides2 = false;
    $scope.active2 = 0;
    var slides2 = $scope.slides2 = [
        {image: '../../assets/files/img/main/dondeIr/1.jpg',
      id: 0},
      {image: '../../assets/files/img/main/dondeIr/2.jpg',
      id: 1},
      {image: '../../assets/files/img/main/dondeIr/3.jpg',
      id: 2}
    ];
    var currIndex = 0;

/*-------------------------------------------------------------------------------------------------*/
     $scope.myInterval3 = 4500;
    $scope.noWrapSlides3 = false;
    $scope.active3 = 0;
    var slides3 = $scope.slides3 = [
      {image: '../../assets/files/img/main/galeria/1.jpg',
      id: 0},
      {image: '../../assets/files/img/main/galeria/2.jpg',
      id: 1},
      {image: '../../assets/files/img/main/galeria/3.jpg',
      id: 2},
       {image: '../../assets/files/img/main/galeria/4.jpg',
      id: 3}
    ];
    var currIndex = 0;

    /*-------------------------------------------------------------------------------------------------*/
    $scope.myInterval4 = 3500;
    $scope.noWrapSlides4 = false;
    $scope.active4 = 0;
    var slides4 = $scope.slides4 = [
      {image: '../../assets/files/img/main/alojamiento/1.jpg',
      id: 0},
      {image: '../../assets/files/img/main/alojamiento/2.jpg',
      id: 1},
      {image: '../../assets/files/img/main/alojamiento/3.jpg',
      id: 2},
       {image: '../../assets/files/img/main/alojamiento/4.jpg',
      id: 3}
    ];
    var currIndex = 0;
   
});
