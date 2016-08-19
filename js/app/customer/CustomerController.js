
CustomerManager.controller('CustomerController', function($scope, CustomerFactory, OrderFactory) {
  $scope.predicate = 'firstName';
  $scope.customers = {};

  $scope.addCustomer = function() {
    var newCustomer = $scope.newCustomer;
    newCustomer && CustomerFactory.setCustomer(newCustomer);
  };

  $scope.remove = function(customerId) {
    CustomerFactory.removeCustomers(customerId);
    OrderFactory.removeOrders(customerId);
  };

  function init_() {
    $scope.customers = CustomerFactory.getCustomers();
  }

  init_();
});