(function() {
  'use strict';

  angular
    .module('profileUpdater')
    .directive('usernameCheck', usernameCheck);

    usernameCheck.$inject = ['$q', 'userService'];

    function usernameCheck($q, userService) {
      return {
        require: 'ngModel',
        link: function(scope, elm, attrs, ctrl) {
          ctrl.$asyncValidators.usernameCheck = function(modelValue) {
            const loggedInUser = userService.getLoggedInUser();

            let def = $q.defer();

            if (modelValue === loggedInUser.username) {
              def.resolve();
              return def.promise;
            }

            return userService.checkUsername(modelValue)
              .then((res) => {
                if (res.status === 200) {
                  def.resolve();
                } else {
                  def.reject('exists');
                }

                return def.promise;
              })
              .catch((err) => {
                throw err;
              });
          };
        }
      };
    }
}());
