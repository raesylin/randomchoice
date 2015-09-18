angular
	.module('app')
	.factory('Presets', ['$http', function($http) {
		return {
			get: function() {
				return $http.get('api/presets.json').then(function(response) {
					return response.data;
				});
			}
		}
	}])
	.service('appService', function() {
		var self = this;
		self.getRandom = function(max) {
			return Math.floor(Math.random() * max);
		};
	})