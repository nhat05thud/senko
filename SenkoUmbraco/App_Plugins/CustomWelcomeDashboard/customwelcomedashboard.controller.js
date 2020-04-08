angular.module("umbraco").controller("CustomWelcomeDashboardController", function ($scope, userService, logResource, entityResource) {
    var vm = this;
    vm.UserName = 'guest';

    var user = userService.getCurrentUser().then(function (user) {
        vm.UserName = user.name;
    });
});