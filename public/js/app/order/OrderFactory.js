
CustomerManager.factory('OrderFactory', function() {
  var factory = {};
  var orders = {
    10: [{ product: 'Table', quantity: 10, price: 106 },
         { product: 'Ball', quantity: 2, price: 15 },
         { product: 'Rocket', quantity: 7, price: 82}],

    12: [{ product: 'Jacket', quantity: 3, price: 31 },
         { product: 'Bat', quantity: 4, price: 10 },
         { product: 'TV', quantity: 9, price: 28}],

    13: [{ product: 'Car', quantity: 12, price: 104 },
         { product: 'Phone', quantity: 4, price: 71 },
         { product: 'Picture', quantity: 9, price: 18}],

    14: [{ product: 'Book', quantity: 11, price: 91 },
         { product: 'Journal', quantity: 7, price: 62 },
         { product: 'Laptop', quantity: 2, price: 34}],

    15: [{ product: 'Statue', quantity: 4, price: 83 },
         { product: 'Wheel', quantity: 7, price: 14 },
         { product: 'Ball', quantity: 2, price: 75}],

    16: [{ product: 'Chair', quantity: 3, price: 131 },
         { product: 'Gloves', quantity: 8, price: 84 },
         { product: 'Watch', quantity: 1, price: 23}]
  };

  factory.getOrders = function() {
    return orders;
  };
  factory.getCustomerOrders = function(id) {
    return orders[id];
  };
  factory.getOrdersCount = function(id) {
    return orders[id].length || 0;
  };
  factory.setOrder = function(id, data) {
    !orders[id] && (orders[id] = []);
    orders[id].unshift({
      product: data.product,
      quantity: +data.quantity,
      price: +data.price
    });

    return {
      success: function(cb) {
        cb && cb(orders[id]);
      },
      error: function(cb) {
        cb && cb('error');
      }
    };
  };
  factory.removeOrders = function(id) {
    delete orders[id];
  };

  return factory;
});