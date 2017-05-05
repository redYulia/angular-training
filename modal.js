var app = angular.module("myApp", []);
app.controller('modalCtrl', function($scope) {
    $scope.modalShown = false;
    $scope.toggleModal = function() {
        $scope.modalShown = !$scope.modalShown;
    };
});
app.directive("modalDirective", function() {
    return {
        templateUrl: 'modal.html',
        replace: true,
        transclude: true,
        scope: {
            title: "=",
            show: "=",
        },
        link: function (scope, element, attrs) {
            //console.log(attrs);
            scope.hideModal = function() {
                scope.show = false;
            };
        }
    }
});