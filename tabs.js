
angular.module("myApp").controller('tabsCtrl', function($scope) {
    console.log("ctrl");
});

/*function tabsController() {
    
    var vm = this;
  
  vm.panes = [];
  vm.select = select;
  vm.addPane = addPane;
  
  function select( pane ) {
    angular.forEach( vm.panes, function( pane ) {
      pane.selected = false;
    });
    pane.selected = true;
  }

  function addPane( pane ) {
    vm.panes.push( pane );
    if ( vm.panes.length === 1 ) {
      select( pane );
    }
  }
}*/

angular.module("myApp").component('tabControl', {  
    templateUrl: 'tabs.html',
    transclude: true,
    controller: function() {
        console.log("i am grut");
        this.panes = [];
        this.select = function(pane) {
            angular.forEach(panes, function(pane) {
              pane.selected = false;
            });
            pane.selected = true;
        };
        this.addPane = function(pane) {
            /*if (panes.length === 0) {
              this.select(pane);
            }*/
            this.panes.push(pane);
        };
    }
});
angular.module("myApp").component('tabPane', {
    transclude: true,
    templateUrl: 'pane.html',
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
        /*console.log(th);
        console.log(th.title);*/
        console.log("i work");
    }
});