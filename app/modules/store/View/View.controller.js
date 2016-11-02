discovrApp.controller('Sview.IndexController', function(
  $localStorage,
  $location,
  AuthenticationService,
  $scope,
  $translate) {
    var vm = this;

    initController();

    function initController() {
        vm.username = $localStorage.currentUser.username;
        var stLan = localStorage.getItem('NG_TRANSLATE_LANG_KEY');
        var szLanLan = stLan.length;
        var lang = stLan.substr((szLanLan - 5), szLanLan);
        localStorage.setItem('NG_TRANSLATE_LANG_KEY', 'store/languages/' + lang);
    };
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

    $scope.myInterval = 4000;
    $scope.noWrapSlides = false;
    $scope.active = 0;
    var slides = $scope.slides = [{
            image: 'http://endimages.s3.amazonaws.com/cache/56/5b/565b60aaf5375256245a263dfe2847bf.jpg',
            id: 0
        },
        {
            image: 'http://www.autominuto.com/blog/wp-content/uploads/2015/11/Pastillas-de-frenos.jpg',
            id: 1
        },
        {
            image: 'http://img.autocosmos.com/noticias/fotosprinc/0_0_20110215101845524.jpg',
            id: 2
        }
    ];
    var currIndex = 0;
});