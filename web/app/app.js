angular.module('todoListApp',
  ['ngAnimate', 'ngAria', 'ngMaterial', 'ngRoute'])
.config(configureRoutesFn)
.run(loadTasksFn);

function configureRoutesFn($routeProvider) {
  $routeProvider
    .when('/todo', {
      controller: 'TodoController',
      templateUrl: 'app/todo/todo-list.html'
    })
    .when('/todo/new', {
      controller: 'AddTodoController',
      templateUrl: 'app/todo/add-todo.html'
    })
    .when('/config', {
      templateUrl: 'app/config/config-form.html'
    })
    .otherwise({
      redirectTo: '/todo'
    });
}

function loadTasksFn(todoService) {
  todoService.bootstrap();
}
