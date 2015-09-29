angular
	.module('app', ['ui.router'])
	.config(['$urlRouterProvider', '$stateProvider', function($urlRouterProvider, $stateProvider) {
		$urlRouterProvider.otherwise('/');

		$stateProvider
		.state('preset', {
			url: '/preset',
			templateUrl: 'templates/preset.html',
			controller: 'presetCtrl'
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
	.directive('listContent', function() {
		return {
			restrict: 'E',
			templateUrl: 'templates/list-content.html',
			controller: 'listCtrl'
		};
	});