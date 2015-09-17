angular
	.module('app')
	.controller('presetCtrl', ['$scope', '$state', 'Presets', function($scope, $state, Presets) {
				$scope.$state = $state;
				$scope.title = "preset";
				$scope.list = [];			// content of current list
				$scope.listIndex = -1;
				$scope.item = {};
				$scope.presets = [];

				Presets.get().then(function(data) {
					$scope.presets = data;
				});
				
				$scope.selectList = function(list){
					$scope.list = [];
					var emptyList = {
						'listName': 'new',
						'listItem': []
					};

					var currentChoice = list || emptyList;

					if (currentChoice != emptyList) {
						var index = $scope.presets.indexOf(currentChoice);
						$scope.list = JSON.parse(JSON.stringify($scope.presets[index].listItem));
						$scope.listIndex = index;
					} else {
						$scope.list = [];
						$scope.listIndex = -1;
					};
					
					$scope.clearStatus();
				};

				$scope.clearStatus = function() {
					for (item in $scope.list) {
						$scope.list[item].chosen = false;
					};
				};

				$scope.removeItem = function(item) {
					var index = $scope.list.indexOf(item);
					$scope.list.splice(index, 1);     
				};

				$scope.hasItem = function() {
					return $scope.list.length;
				};

 				$scope.reloadList = function() {
					$scope.selectList($scope.presets[$scope.listIndex]);
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

				$scope.save = function() {
					$http.post('/api/friends', friends);
				};
	}]);