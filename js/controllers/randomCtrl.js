angular
	.module('app')
	.controller('randomCtrl', ['$scope', '$location', '$anchorScroll', function($scope, $location, $anchorScroll) {

		$scope.numbers = [];

		$scope.getRandom = function() {
			$scope.numbers = [];
			var start = parseInt($scope.start);
			var end = parseInt($scope.end);
			var number = parseInt($scope.number)
			for (var i = 0; i < number; i++) {
				$scope.numbers.push(Math.floor(Math.random() * (end + 1 - start) + start));
			};
			$location.hash("results");
			$anchorScroll();
		};

		$scope.isNumDefined = function() {
			return $scope.numbers.length !== 0;
		};

		$scope.unDefineNum = function() {
			$scope.numbers = [];
		};
	}]);