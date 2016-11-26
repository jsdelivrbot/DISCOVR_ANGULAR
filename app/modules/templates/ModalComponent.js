discovrApp.component('modal', {
    templateUrl: 'modules/templates/Modal.html',
    controller: MyComponentController,
    controllerAs: 'vm',
    bindings: {
      preview: "="
    }    
  });

  function MyComponentController() {
    var vm = this;
    
    vm.title = "I'm the component controller"
    console.log(vm.preview.name);
  }
  discovrApp.controller('Modal.Controller', function(
    $uibModal,
    $log,
    $document){
      var vm = this;


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
