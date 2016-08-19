
CustomerManager.factory('CustomerFactory', function(OrderFactory) {
  var factory = {};
  var generateId_ = (function () {
    var uniqueId_ = 100;
    return function () {
      return uniqueId_ += 1;
    };
  }());

  var customers = {
    10: { firstName: 'Jhon', lastName: 'Gonzales', city: 'NY'},
    12: { firstName: 'Smith', lastName: 'Price', city: 'California'},
    13: { firstName: 'Andy', lastName: 'Passmore', city: 'LA'},
    14: { firstName: 'Tom', lastName: 'Sutton', city: 'DC'},
    15: { firstName: 'Frank', lastName: 'Williams', city: 'Orlando'},
    16: { firstName: 'Bob', lastName: 'Tucker', city: 'Buffalo'}
  };

  factory.getCustomers = function() {
    return customers = calculateOrdersCount_(customers);
  };
  factory.getCustomer = function(id) {
    return customers[id];
  };
  factory.setCustomer = function(customer) {
    customers[generateId_()] = {
      firstName: customer.firstName,
      lastName: customer.lastName,
      city: customer.city,
      ordersCount: 0
    };
  };
  factory.removeCustomers = function(id) {
    delete customers[id];
  };

  function calculateOrdersCount_(list) {
    angular.forEach(list, function(item, id) {
      item.ordersCount = OrderFactory.getOrdersCount(id);
    });
    return list;
  }

  return factory;
});