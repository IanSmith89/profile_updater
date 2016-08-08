(function() {
  'use strict';

  angular
    .module('profileUpdater')
    .factory('userService', userService);

  userService.$inject = ['$http'];

  function userService($http) {
    let loggedInUser = {};

    const service = {
      getUser,
      putUser,
      checkUsername,
      checkEmail,
      getLoggedInUser,
      setLoggedInUser
    };

    return service;

    function getUser(id) {
      return $http.get(`/api/user/${id}`)
        .then((res) => {
          return res.data;
        })
        .catch((err) => {
          throw err;
        });
    }

    function putUser(user) {
      return $http.put(`/api/user/${user.id}`, user)
        .then((res) => {
          return res.data;
        })
        .catch((err) => {
          throw err;
        });
    }

    function checkUsername(username) {
      return $http.get(`/api/user/username_exists?username=${username}`)
        .then((res) => {
          return res;
        })
        .catch((err) => {
          throw err;
        });
    }

    function checkEmail(email) {
      return $http.get(`/api/user/email_exists?email=${email}`)
        .then((res) => {
          return res;
        })
        .catch((err) => {
          throw err;
        });
    }

    function getLoggedInUser() {
      return loggedInUser;
    }

    function setLoggedInUser(user) {
      loggedInUser.id = user.id;
      loggedInUser.username = user.username;
      loggedInUser.email = user.email;
    }
  }
}());
