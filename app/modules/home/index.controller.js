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
<<<<<<< HEAD

    $scope.dataArray = [
      {
        src: 'http://conlospiesporlatierra.com/wp-content/uploads/2013/07/img_9394.jpg'
      },
      {
        src: 'http://cdn.laprensa.com.ni/wp-content/uploads/2016/02/13230654/volcanes-de-Nicaragua-1.jpg'
      },
      {
        src: 'http://i1227.photobucket.com/albums/ee423/tryescas/78848352_zps11af6256.jpg'
      },
      {
        src: 'http://img.ev.mu/images/villes/40755/1605x642/40755.jpg'
      },
      {
        src: 'http://endimages.s3.amazonaws.com/legacy/1355009715_RUTA%20CA%C3%91ON%20DE%20SOMOTO%20091212.jpg'
=======
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
>>>>>>> refs/remotes/origin/master
      },
      {
        src: 'http://trunkweed.com/uploads/posts/images/590341-blue-panoramic-nature-background.jpg'
      },
      {
        src: 'http://trunkweed.com/uploads/posts/images/590341-blue-panoramic-nature-background.jpg'
      }
    ];
<<<<<<< HEAD

});
=======
});
>>>>>>> refs/remotes/origin/master
