(function() {
  function Message($firebaseArray, $cookies) {
    var Message = {};
    var ref = firebase.database().ref().child("messages");
    var messages = $firebaseArray(ref);

    Message.getByRoomId = function(roomId) {
      return $firebaseArray(ref.orderByChild("roomId").equalTo(roomId));
    }

    Message.send = function(newMessage, currentRoom) {
      messages.$add({
        content: newMessage,
        username: $cookies.get('userName'),
        roomId: currentRoom
      });
    }

    return Message;
  }

  angular
    .module('blocChat')
    .factory('Message', ['$firebaseArray', '$cookies', Message]);
})();
