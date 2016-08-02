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
    vm.checkUsername = checkUsername;
    vm.checkEmail = checkEmail;
    vm.user = {};

    activate();

    function activate() {
      vm.usernameExists = false;
      vm.emailExists = false;

      return userService.getUser(1)
        .then((user) => {
          vm.user = user;
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
          vm.user = user;
        })
        .catch((err) => {
          throw err;
        });
    }

    function checkUsername() {
      return userService.checkUsername(vm.user.username)
        .then((status) => {
          $timeout(() => {
            vm.usernameExists = status;
          }, 2000);
        })
        .catch((err) => {
          throw err;
        });
    }

    function checkEmail() {
      return userService.checkEmail(vm.user.email)
        .then((status) => {
          $timeout(() => {
            vm.emailExists = status;
          }, 3000);
        })
        .catch((err) => {
          throw err;
        });
    }
  }
}());
