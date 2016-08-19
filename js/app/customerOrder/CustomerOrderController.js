
CustomerManager.controller('CustomerOrderController', function($scope, $routeParams,
      CustomerFactory, OrderFactory) {
  var customerId = +$routeParams.customerId;
  $scope.customer = CustomerFactory.getCustomer(customerId);
  $scope.orders = OrderFactory.getCustomerOrders(customerId);
  $scope.predicate = 'product';

  $scope.addOrder = function() {
    var newOrder = $scope.newOrder;
    newOrder && OrderFactory.setOrder(customerId, newOrder)
      .success(function(customerOrders) {
        $scope.orders = customerOrders;
      });
  }
});