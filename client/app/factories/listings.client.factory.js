angular.module('listings').factory('Listings', ['$http', 
  function($http) {
    var methods = {
      getAll: function() {
        return $http.get('https://app-6-heroku.herokuapp.com/listings');
      },

      create: function(listing) {
        return $http.post('https://app-6-heroku.herokuapp.com/listings', listing);
      }, 

      read: function(id) {
        return $http.get('https://app-6-heroku.herokuapp.com/listings/' + id);
      }, 

      update: function(id, listing) {
        return $http.put('https://app-6-heroku.herokuapp.com/listings/' + id, listing);
      }, 

      delete: function(id) {
        return $http.delete('https://app-6-heroku.herokuapp.com/listings/' + id);
      }
    };

    return methods;
  }
]);