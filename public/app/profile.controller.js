(function() {
  'use strict';

  angular
    .module('profileUpdater')
    .controller('ProfileController', ProfileController);

  ProfileController.$inject = ['$timeout', 'userService'];

  function ProfileController($timeout, userService) {
    const vm = this;

    vm.update = update;
    vm.refresh = activate;

    activate();

    function activate() {
      return userService.getUser(1)
        .then((user) => {
          vm.user = user;
          userService.setLoggedInUser(user);
        })
        .catch((err) => {
          throw err;
        });
    }

    function update() {
      const { id, username, email, password } = vm.user;

      return userService.putUser({
        id,
        username,
        email,
        password
      })
        .then((user) => {
          vm.user.passwordConfirm = '';
          userService.setLoggedInUser(user);
        })
        .catch((err) => {
          throw err;
        });
    }
  }
}());
