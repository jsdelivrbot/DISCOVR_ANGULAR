/*-------------------------    Tile    --------------------------------*/
discovrApp.component('tileGeneral', {
    templateUrl:'modules/templates/components/GeneralTile.html',
    bindings: {
            info: '<',
        },
    controller: function($uibModal) {
        var $ctrl = this;

        $ctrl.open = function(test) {
            $uibModal.open({                
                template: '<modal-preview modal-data="$ctrl.modalData" $close="$close(result)" $dismiss="$dismiss(reason)"></modal-preview>',
                controller: ['modalData', function(modalData) {
                    var $ctrl = this;
                    $ctrl.modalData = modalData;
                }],
                controllerAs: '$ctrl',
                resolve: {
                    modalData: test
                }
            }).result.then(function(result) {
                console.info("I was closed, so do what I need to do myContent's controller now and result was->");
                console.info(result);
            }, function(reason) {
                console.info("I was dimissed, so do what I need to do myContent's controller now and reason was->"+reason);
            });
        };
      }
  });
/*-------------------------    ModalPreview    --------------------------------*/
discovrApp.component('modalPreview', {
    templateUrl:'modules/templates/components/ModalPreview.html',
    bindings: {
            $close: '&',
            $dismiss: '&',
            greeting: '<',
            modalData: '<'
        },
        controller: [function() {
            var $ctrl = this;
            $ctrl.handleClose = function() {
                console.info("in handle close");
                $ctrl.$close({
                    result: $ctrl.modalData
                });
            };
            $ctrl.handleDismiss = function() {
                console.info("in handle dismiss");
                $ctrl.$dismiss({
                    reason: 'cancel'
                });
            };
        }]    
  });


  