angular
	.module('app', [
		'ui.router'
		])
	.config(['$urlRouterProvider', '$stateProvider', function($urlRouterProvider, $stateProvider) {
		$urlRouterProvider.otherwise('/');

		$stateProvider
		.state('preset', {
			url: '/preset',
			templateUrl: 'templates/preset.html',
			controller: 'presetCtrl',
			resolve: {
				presets: ['Presets', function(Presets) {
					return Presets.get();
				}]
				// // // Or do the following:

				// friends: ['$http', function($http) {
				// 	return $http.get('/api/friends.json').then(function(response) {
				// 		return response.data;
				// 	})
				// }]
			}
		})
		.state('custom', {
			url: '/custom',
			templateUrl: 'templates/custom.html',
			controller: 'customCtrl'
		})
		.state('random', {
			url: '/random',
			templateUrl: 'templates/random.html',
			controller: 'randomCtrl'
		})
		.state('home', {
			url: '/',
			templateUrl: 'templates/home.html',
			controller: 'homeCtrl'
		})
	}])