angular.module('todoListApp')
  .factory('todoService', ['$http', todoService]);

  function todoService($http) {

    return {
      getAll: function() {       
        function success(httpPayload) {
          return httpPayload.data;    // the JSON is in .data
        }
        // start running the get method on data/tasks.json
        // and return the promise, which the caller (controller)
        // can use when the answer comes back
        return $http.get('api/todos')
        .then(success);              // no error method = default error
        
        // success method of the promise
        // if it returns something, it changes the ultimate
        // return value of the promise in getAll to that thing
        // (translate the answer from HTTP specific to just data)
      },
      getOne: function(id) {
        function success(httpPayload) {
          return httpPayload.data;
        }

        return $http.get('api/todos/' + id)
        .then(success);
      },
      createOrUpdate: function(task) {
        if (task.id !== undefined) {
          return $http.put('api/todos/' + task.id, task);
        } else {
          return $http.post('api/todos', task);
        }
      },
      delete: function(id) {
        return $http.delete('api/todos/' + id);
      }
    };
  }