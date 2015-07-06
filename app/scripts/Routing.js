Nuntiis.config(function ($routeProvider) {
  $routeProvider
    .when('/', {
      templateUrl: 'views/main.html',
      controller: 'FrontPageCtrl'
    })
    .otherwise({
      redirectTo: '/'
    });
});
