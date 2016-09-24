discovrApp.controller('Home.IndexController', function(
    $localStorage,
    $location,
    AuthenticationService,
    $scope,
    $rootScope,
    $translate) {

    var vm = this;
    vm.profile = profile;
    vm.getProfile = getProfile;
    
    initController();

    function initController() {
        vm.username = $localStorage.currentUser.username;
        var stLan = localStorage.getItem('NG_TRANSLATE_LANG_KEY');
        var szLanLan = stLan.length;
        var lang = stLan.substr((szLanLan-5),szLanLan);
        localStorage.setItem('NG_TRANSLATE_LANG_KEY','home/languages/' + lang);
    };

    function getProfile(){
        var again = AuthenticationService.GetProfile(1);
        console.log(again);
    }

    function profile(){
        AuthenticationService.Profile();
    }
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
        {image: 'http://www.pixolo.it/wp-content/uploads/2012/07/wallpaper-1867190.jpg',
      id: 0},

      {image: 'http://www.que-come.com/wp-content/uploads/2015/08/que-comen-las-ranas.jpg',
      id: 1},

        {image: 'http://www.pixolo.it/wp-content/uploads/2012/07/wallpaper-1667348.jpg',
      id: 2}
    ];
    var currIndex = 0;

    $scope.myInterval1 = 4000;
    $scope.noWrapSlides1 = false;
    $scope.active1 = 0;
    var slides1 = $scope.slides1 = [
        {image: 'http://www.pixolo.it/wp-content/uploads/2012/07/wallpaper-1867190.jpg',
      id: 0},
        {image: 'http://www.pixolo.it/wp-content/uploads/2012/07/wallpaper-1667348.jpg',
      id: 1}
    ];
    var currIndex = 0;

   
});
