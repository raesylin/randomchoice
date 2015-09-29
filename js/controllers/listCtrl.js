angular
	.module('app')
	.controller('listCtrl', ['$scope', '$state', 'Random', function($scope,$state, Random) {

		if ($scope.$state.includes('preset')) {
			$scope.list = Random.fate.defaultList;
		} else {
			$scope.list = Random.fate.customList;
		};

		$scope.clearStatus = function() {

			for (item in $scope.list) {
				$scope.list[item].chosen = false;
			};

		};

		$scope.reload = function() {
			$scope.clearStatus();
			$scope.list = JSON.parse(JSON.stringify(Random.fate.defaultList));
		};

		$scope.removeItem = function(item) {
			var index = $scope.list.indexOf(item);
			$scope.list.splice(index, 1); 
		};

		$scope.hasItem = function() {
			return $scope.list.length;
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

	}]);