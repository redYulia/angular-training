var app = angular.module("myApp", []);
app.controller('modalCtrl', function($scope) {
    $scope.modalShown = false;
    $scope.toggleModal = function() {
        $scope.modalShown = !$scope.modalShown;
    };
});

app.component('tabControl', {  
    templateUrl: 'tabsTemplate',
    transclude: true,
    controller: function() {
        //console.log("i am grut");
        this.panes = [];
        this.select = function(pane) {
            angular.forEach(this.panes, function(pane) {
              pane.selected = false;
            });
            pane.selected = true;
        };
        this.addPane = function(pane) {
            if (this.panes.length === 0) {
              this.select(pane);
            }
            this.panes.push(pane);
        };
    }
});

app.component('tabPane', {
    transclude: true,
    templateUrl: 'tabPaneTemplate',
    require: {
      tabsCtrl: '^tabControl'
    },
    bindings: {
      title: '@'
    },
    controller: function() {
        this.$onInit = function() {
            this.tabsCtrl.addPane(this);
        };
        //console.log("i work");
    }
});

app.directive("modal", function() {
    return {
        templateUrl: 'modalTemplate',
        replace: true,
        transclude: true,
        scope: {
            title: '=',
            show: '=',
        },
        link: function (scope, element, attrs) {
            scope.hideModal = function() {
                scope.show = false;
            };
        }
    }
});