
CustomerManager.controller('OrderController', function($scope, CustomerFactory, OrderFactory) {
  $scope.predicate = 'product';
  var customers = CustomerFactory.getCustomers();
  var customerOrders = OrderFactory.getOrders();
  var list = [];

  angular.forEach(customers, function(customer, id) {
    customer.orders = customerOrders[id];
    list.push(customer);
  });
  $scope.list = list;
});