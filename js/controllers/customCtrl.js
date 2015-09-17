angular
	.module('app')
	.controller('customCtrl', ['$scope', '$state', function($scope, $state) {
				$scope.$state = $state;
				$scope.title = "custom";
				$scope.item = {};
				$scope.list = [];


				$scope.addItem = function() {
					$scope.item.chosen = false;
					$scope.list.push($scope.item);
					$scope.item = {};
				};

				$scope.hasItem = function() {
					return $scope.list.length;
				};

				$scope.removeItem = function(item) {
					var index = $scope.list.indexOf(item);
					$scope.list.splice(index, 1);     
				};

				$scope.clearList = function() {
					$scope.list = [];
				};

				$scope.makeChoice = function() {
					$scope.clearStatus();
					var max = $scope.list.length;
					var chosenNum = $scope.getRandom(max);
					$scope.list[chosenNum].chosen = true;
				};

				$scope.getRandom = function(max) {
					return Math.floor(Math.random() * max);
				};

				$scope.clearStatus = function() {
					for (item in $scope.list) {
						$scope.list[item].chosen = false;
					};
				};
	}]);