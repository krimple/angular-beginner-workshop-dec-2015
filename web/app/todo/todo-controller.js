angular.module('todoListApp')
.controller('TodoController', ['$scope', 'todoService', TodoController]);

function TodoController($scope, todoService) {
  // on load of controller - fetch tasks
  
  function getAll() {
  	todoService.getAll()
  	.then(function(todos) {
  		$scope.todos = todos;
  	})
  }
  // startup - load 'em all
  getAll();

  $scope.delete = function(todo) {
  	if(confirm("delete todo " + todo.description)) {
  		// when we successfully delete, reload the list
  		todoService.delete(todo.id)
  		.then(getAll);
  	}
  };
  $scope.toggleComplete = function(todo) {
  	console.log(todo.complete);
  	todoService.createOrUpdate(todo)
  	.then(getAll);
  };
}