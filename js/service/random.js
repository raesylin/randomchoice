(function(){

	var Random = function($http) {

		var fate = {};

		fate.defaultList = [];
		fate.customList = [];

		fate.selectList = function(index) {
	
			fate.defaultList = [];

			if (index !== -1) {
				fate.defaultList = JSON.parse(JSON.stringify(fate.presets[index].listItem));
				fate.listIndex = index;
			};

		};
		
		var getPreset = function() {
			return $http.get("api/presets.json")
					.then(function(response) {
						fate.presets = response.data;
						return fate.presets;
					});
		};

		return {
			getPreset: getPreset,
			fate: fate
		};

	};

	var module = angular.module('app');
	module.factory('Random', Random);

})();
