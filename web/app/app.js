angular.module('todoListApp',
  ['ngAnimate', 'ngAria', 'ngMaterial', 'ngRoute'])
.config(configureRoutesFn);

function configureRoutesFn($routeProvider) {
  $routeProvider
    .when('/todo', {
      controller: 'TodoController',
      templateUrl: 'app/todo/todo-list.html'
    })
    .when('/todo/new', {
      controller: 'EditTodoController',
      templateUrl: 'app/todo/edit-todo.html'
    })
    .when('/todo/:id', {
      controller: 'EditTodoController',
      templateUrl: 'app/todo/edit-todo.html'
    })
    .when('/config', {
      templateUrl: 'app/config/config-form.html'
    })
    .otherwise({
      redirectTo: '/todo'
    });
}
