angular.module('app', [
    'ui.router'
  ])
  .config(['$stateProvider', '$urlRouterProvider',
    function ($stateProvider, $urlRouterProvider) {

      $stateProvider
        .state('login', {
          url: 'login',
          // abstract: true,
          templateUrl: 'popup.html'
        })

      .state('signup', {
        url: 'signup',
        templateUrl: 'popup.html' 
      });
  }]);