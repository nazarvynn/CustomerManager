
CustomerManager.directive('customerSorting', function() {
  return {
    restrict: 'EA',
    replace: true,
    scope: true,
    templateUrl: './js/app/customerSorting/CustomerSortingTemplate.html'
  }
});