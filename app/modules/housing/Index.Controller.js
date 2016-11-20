discovrApp.controller('Housing.IndexController', function(
  $localStorage,
  $location,
  AuthenticationService,
  $scope,
  $uibModal,
  $log,
  $document,
  $stateParams,
  $translate) {
    var vm = this;
    //local variables
    vm.move = move;
    vm.id = $stateParams.id;
    vm.preview = {
      name:'Hotel Example Name',
      about:'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      appraisal: 4.5,
      tags:[
        {tag:'wifi',name:'Wifi'},
        {tag:'local_dining',name:'Restaurant'},
        {tag:'drive_eta',name:'Garage'},
        {tag:'personal_video',name:'TV'},
        {tag:'casino',name:'Casino'},
        {tag:'fitness_center',name:'Gym'}
      ]
    };

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
    $scope.isNavCollapsed = true;
    $scope.isCollapsed = false;
    $scope.isCollapsedHorizontal = false;

    $scope.myInterval = 15000;
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
        $translate.use('housing/languages/' + browserLan);
        console.log(browserLan);
        /*
        var stLan = localStorage.getItem('NG_TRANSLATE_LANG_KEY');
        var szLanLan = stLan.length;
        var lang = stLan.substr((szLanLan - 5), szLanLan);
        localStorage.setItem('NG_TRANSLATE_LANG_KEY', 'housing/languages/' + lang);*/
    };
    vm.open = function (type, size, parentSelector) {
      var parentElem = parentSelector ?
        angular.element($document[0].querySelector('.ModalOpt ' + parentSelector)) : undefined;
      if(type === "preview") {
        var modalInstance = $uibModal.open({
          animation: vm.animationsEnabled,
          ariaLabelledBy: 'modal-title',
          ariaDescribedBy: 'modal-body',
          templateUrl: 'ModalPreview.html',
          controller: 'ModalInstanceCtrl',
          controllerAs: 'vm',
          size: size,
          appendTo: parentElem,
          resolve: {
            items: function () {
              return vm.items;
            }
          }
        });
      }
    modalInstance.result.then(function (selectedItem) {
      vm.selected = selectedItem;
    }, function () {
      $log.info('Modal dismissed at: ' + new Date());
    });
  };
  vm.openComponentModal = function () {
    var modalInstance = $uibModal.open({
      animation: vm.animationsEnabled,
      component: 'modalComponent',
      resolve: {
        items: function () {
          return vm.items;
        }
      }
    });
    modalInstance.result.then(function (selectedItem) {
      vm.selected = selectedItem;
    }, function () {
      $log.info('modal-component dismissed at: ' + new Date());
    });
  };
});
