angular.module('todoListApp')
.controller('EditTodoController', 
	['$scope', '$location', '$routeParams', 'todoService', EditTodoController]);

function EditTodoController($scope, $location, $routeParams, todoService) {

  
  	// on startup - do we get an ID parameter? if so, 
  	// load from the service (HTTP GET), otherwise
  	// we create a new blank id
	if ($routeParams.id) {
		todoService.getOne($routeParams.id)
		.then(loadTodo);
	} else {
		$scope.todo = {
			description: "",
			complete: false
		};
	}
	
	function loadTodo(todo) {
		$scope.todo = todo;
	}

	$scope.createOrUpdate = function(todo) {
		todoService.createOrUpdate(todo)
		.then(goToList);

		function goToList() {
			$location.path('#/todo');
		}
	};
  
    
}