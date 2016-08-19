
CustomerManager.controller('NavigationController', function($scope, $location) {
  $scope.customersTab = false;
  $scope.ordersTab = false;

  $scope.goTab = function(path) {
    $location.path('/' + path);
    setActiveTab_();
  };

  function setActiveTab_() {
    var url = $location.url();
    $scope.customersTab = new RegExp('^\/customers$').test(url);
    $scope.ordersTab = new RegExp('^\/orders$').test(url);
  }
  setActiveTab_();
});