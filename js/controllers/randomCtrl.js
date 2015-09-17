angular
	.module('app')
	.controller('randomCtrl', ['$scope', function($scope) {
		$scope.numbers = [];

		$scope.getRandom = function() {
			$scope.numbers = [];
			for (var i = 0; i < $scope.number; i++) {
				$scope.numbers.push(Math.floor(Math.random() * ($scope.end + 1 - $scope.start) + $scope.start));
			};
		};

		$scope.isNumDefined = function() {
			return $scope.numbers.length !== 0;
		};

		$scope.unDefineNum = function() {
			$scope.numbers = [];
		};
	}]);