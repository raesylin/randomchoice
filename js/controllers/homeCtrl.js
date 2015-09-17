angular
	.module('app')
	.controller('homeCtrl', ['$scope', 'Presets', function($scope, Presets) {
				$scope.title = "home",
				Presets.get().then(function(data) {
					$scope.friends = data;
				});
	}]);