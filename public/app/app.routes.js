// public/js/appRoutes.js
var appRoutes = angular.module('appRoutes', ['ui.router']);

appRoutes.config( function($stateProvider, $urlRouterProvider) {

	$urlRouterProvider.otherwise('/');

	$stateProvider
		.state('home', {
			url : '/',
			templateUrl	: 'app/components/home/homeView.html'
		})

		.state('projetos', {
			url : '/projetos',
			resolve : {
				lista : ['projetoService', function(projetoService) {
					return projetoService.get();
				}],
				projeto : function(){return[];}
			},
			templateUrl	: 'app/components/projeto/projetoView.html',
			controller 	: 'projetoController',
			controllerAs: 'projetos'
		});
});