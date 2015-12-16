angular.module('todoListApp')
.controller('AddTodoController', AddTodoController);

function AddTodoController($scope, $location, todoService) {
  $scope.todo = {
    description: '',
    complete: false
  };

  $scope.addTodo = function(todo) {
    todoService.add(todo);
    $location.path('#/todo');
  };
}