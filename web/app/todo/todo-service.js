angular.module('todoListApp')
  .factory('todoService', function () {

    function flush(todos) {
      window.localStorage.todos = JSON.stringify(todos);
    }

    return {
      todos: [
        {description: 'Clean the dishes', complete: false},
        {description: 'Clean the sink', complete: false},
        {description: 'Wash the floor', complete: false},
        {description: 'Wash the windows', complete: false}
      ],
      add: function(todo) {
        this.todos.push(todo);
        flush(this.todos);
      },
      save: function() {
        flush(this.todos);
      },
      bootstrap: function() {
        if (window.localStorage.todos) {
          this.todos = JSON.parse(window.localStorage.todos);
        } else {
          this.todos = [];
        }
      }
    };
  });