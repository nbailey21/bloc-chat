(function() {
    function HomeCtrl(Room, Message, $uibModal, $cookies) {
      this.rooms = Room.all;
      this.currentRoom = null;

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

      this.message = function() {
        Message.send(this.sendMessage, this.currentRoom.$id);
        this.sendMessage="";
      }

    }

    angular
        .module('blocChat')
        .controller('HomeCtrl', ['Room', 'Message', '$uibModal', '$cookies', HomeCtrl]);
})();
