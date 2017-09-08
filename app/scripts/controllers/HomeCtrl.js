(function() {
    function HomeCtrl(Room, Message, $uibModal) {
      this.rooms = Room.all;

      this.open = function() {
        $uibModal.open({
          templateUrl: "/templates/modal.html",
          controller: 'ModalCtrl',
          controllerAs: 'modal',
        });
      }

      this.chat = function(room) {
        this.currentRoom = room;
        this.currentMessages = Message.getByRoomId(room.$id);
      }

    }

    angular
        .module('blocChat')
        .controller('HomeCtrl', ['Room', 'Message', '$uibModal', HomeCtrl]);
})();
