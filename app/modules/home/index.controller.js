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
     $scope.dataArray = [
      {
        src: 'http://trunkweed.com/uploads/posts/images/599694-panoramic-nature-wallpaper-1.jpg'
      },
      {
        src: 'http://trunkweed.com/uploads/posts/images/590341-blue-panoramic-nature-background.jpg'
      },
      {
        src: 'http://cdn.wallpapersafari.com/34/30/oDlPQr.jpg'
      },
      {
        src: 'http://trunkweed.com/uploads/posts/images/599708-panoramic-nature-wallpaper.jpg'
      },
      {
        src: 'http://trunkweed.com/uploads/posts/images/590341-blue-panoramic-nature-background.jpg'
      },
      {
        src: 'http://trunkweed.com/uploads/posts/images/590341-blue-panoramic-nature-background.jpg'
      },
      {
        src: 'http://trunkweed.com/uploads/posts/images/590341-blue-panoramic-nature-background.jpg'
      }
    ];
});
