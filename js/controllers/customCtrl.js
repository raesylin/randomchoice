angular
	.module('app')
	.controller('customCtrl', ['$scope', '$state', 'Random', function($scope, $state, Random) {
				$scope.$state = $state;
				$scope.title = "custom";
				$scope.item = {};
				$scope.list = [];

				$scope.addItem = function() {
					$scope.item.chosen = false;
					$scope.list.push($scope.item);
					$scope.item = {};
				};

	}]);