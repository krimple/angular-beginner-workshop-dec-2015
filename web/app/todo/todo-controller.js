angular.module('todoListApp')
.controller('TodoController', TodoController);

function TodoController($scope, todoService) {
  $scope.todos = todoService.todos;

  $scope.save = function() {
    todoService.save();
  };
}