// public/js/appRoutes.js
var appRoutes = angular.module('appRoutes', ['ui.router']);

appRoutes.config( function($stateProvider, $urlRouterProvider) {

	$urlRouterProvider.otherwise('/error');

	$stateProvider
		.state('error', {
			url: '/error',
			templateUrl : 'app/components/home/error-view.html'
		})

		.state('home', {
			url : '/',
			resolve : {
				projetoList : ['projetoService', function( projetoService ) {
					return projetoService.list();
				}]
			},
			templateUrl	: 'app/components/home/home-view.html',
			controller 	: 'homeController',
			controllerAs: 'home'
		})

		.state('projetos', {
			url : '/projetos',
			templateUrl	: 'app/components/projeto/projeto-view.html',
		})

		.state('projetos.list', {
			url : '/list',
			resolve : {
				lista : ['projetoService', function(projetoService) {
					return projetoService.list();
				}],
				projeto : function(){return {};}
			},
			templateUrl : 'app/components/projeto/projeto-list-view.html',
			controller 	: 'projetoController',
			controllerAs: 'projetos'
		})

		.state('projetos.manter', {
			url : '/manter/:idProjeto',
			resolve : {
				projeto : ['$stateParams', 'projetoService', function( $stateParams, projetoService ) {
					return projetoService.get($stateParams.idProjeto);
				}],
				lista : function(){return[];}
			},
			templateUrl : 'app/components/projeto/projeto-form-view.html',
			controller 	: 'projetoController',
			controllerAs: 'projetos'
		})

		.state('projetos.incluir', {
			url : '/manter/:idProjeto',
			resolve : {
				projeto : function(){return {}; } ,
				lista : function(){return[];}
			},
			templateUrl : 'app/components/projeto/projeto-form-view.html',
			controller 	: 'projetoController',
			controllerAs: 'projetos'
		});
});