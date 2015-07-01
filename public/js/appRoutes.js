// public/js/appRoutes.js
angular.module('appRoutes', []).config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
	$routeProvider
		.when('/', {
			templateUrl	: 'views/home.html',
			controller	: 'mainController'
		})

		.when('/projetos', {
			templateUrl	: 'views/projetos.html',
			controller	: 'projetoController'
		});

	$locationProvider.html5Mode(true);
}]);