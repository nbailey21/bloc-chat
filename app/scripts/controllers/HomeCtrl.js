(function() {
    function HomeCtrl(Room, $uibModal) {
      this.rooms = Room.all;

      this.open = function() {
        console.log("open called")
        $uibModal.open({
          templateUrl: "/templates/modal.html",
          controller: 'ModalCtrl',
          controllerAs: 'modal',
        });
      }
    }

    angular
        .module('blocChat')
        .controller('HomeCtrl', ['Room', '$uibModal', HomeCtrl]);
})();
