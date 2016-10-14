var CustomerManager = angular.module('CustomerManager', ['ngRoute']);

CustomerManager.config(function($routeProvider) {
  $routeProvider
    .when('/customers', {
      controller: 'CustomerController',
      templateUrl: 'js/app/customer/CustomerTemplate.html'
    })
    .when('/customer-orders/:customerId', {
      controller: 'CustomerOrderController',
      templateUrl: 'js/app/CustomerOrder/CustomerOrderTemplate.html'
    })
    .when('/orders', {
      controller: 'OrderController',
      templateUrl: 'js/app/order/OrderTemplate.html'
    })
    .otherwise({
      redirectTo: '/customers'
    });
});

CustomerManager.run(function($rootScope, $location) {
  $rootScope.go = function(path) {
    $location.path(path);
  };
});