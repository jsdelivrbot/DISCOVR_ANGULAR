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

    vm.animationsEnabled = true;
    $scope.isNavCollapsed = true;
    $scope.isCollapsed = false;
    $scope.isCollapsedHorizontal = false;

    vm.open = function (type, size, parentSelector) {
      var parentElem = parentSelector ?
        angular.element($document[0].querySelector('.ModalOpt ' + parentSelector)) : undefined;
      if(type === "book"){
        var modalInstance = $uibModal.open({
          animation: vm.animationsEnabled,
          ariaLabelledBy: 'modal-title',
          ariaDescribedBy: 'modal-body',
          templateUrl: 'BookModal.html',
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
      }else{
        var modalInstance = $uibModal.open({
          animation: vm.animationsEnabled,
          ariaLabelledBy: 'modal-title',
          ariaDescribedBy: 'modal-body',
          templateUrl: 'MapsModal.html',
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

    $scope.myInterval = 9000;
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

discovrApp.controller('ModalInstanceCtrl', function ($uibModalInstance, items) {
  var vm = this;

  vm.ok = function () {
    $uibModalInstance.close(vm.selected.item);
  };

  vm.cancel = function () {
    $uibModalInstance.dismiss('cancel');
  };
});

discovrApp.component('modalComponent', {
  templateUrl: 'MapsModal.html',
  bindings: {
    resolve: '<',
    close: '&',
    dismiss: '&'
  },
  controller: function () {
    var vm = this;

    vm.$onInit = function () {
      vm.items = vm.resolve.items;
      vm.selected = {
        item: vm.items[0]
      };
    };

    vm.ok = function () {
      vm.close({$value: vm.selected.item});
    };

    vm.cancel = function () {
      vm.dismiss({$value: 'cancel'});
    };
  }
});
