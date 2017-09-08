(function() {
    function UserCtrl($uibModalInstance, $cookies) {

      this.submit = function() {
        $cookies.put('userName', this.newUser);
        $uibModalInstance.close();
      };

      this.cancel = function() {
        $uibModalInstance.close();
      };
    }

    angular
        .module('blocChat')
        .controller('UserCtrl', ['$uibModalInstance', '$cookies', UserCtrl]);
})();
