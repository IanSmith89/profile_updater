(function() {
  'use strict';

  angular
    .module('profileUpdater')
    .directive('emailCheck', emailCheck);

    emailCheck.$inject = ['$q', 'userService'];

    function emailCheck($q, userService) {
      return {
        require: 'ngModel',
        link: function(scope, elm, attrs, ctrl) {
          ctrl.$asyncValidators.emailCheck = function(modelValue) {
            const loggedInUser = userService.getLoggedInUser();

            let def = $q.defer();

            if (modelValue === loggedInUser.email) {
              def.resolve();
              return def.promise;
            }

            return userService.checkEmail(modelValue)
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
