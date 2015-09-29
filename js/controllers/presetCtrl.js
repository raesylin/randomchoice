angular
	.module('app')
	.controller('presetCtrl', ['$scope', '$state', 'Random', function($scope, $state, Random) {

				$scope.title = "preset";
				$scope.$state = $state;
				$scope.listIndex = -1;

				var onSuccess = function(data){
					$scope.presets = data;
				};

				var onError = function(reason){
					console.log('reason');
				};

				Random.getPreset().then(onSuccess, onError);

				$scope.selectList = function(index) {
					Random.fate.selectList(index);
					$scope.list = JSON.parse(JSON.stringify(Random.fate.defaultList));
				};


	}]);