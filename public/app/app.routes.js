// public/js/appRoutes.js

/**
	Este módulo trata todas as rotas ou endereços e encaminha para o template e controller adequado
	
	@module appRoutes
*/
var appRoutes = angular.module('appRoutes', ['ui.router']);

appRoutes.config( function($stateProvider, $urlRouterProvider) {


	/**
		Este método encaminha para a URL passada como parâmetro sempre que uma rota não tratada é definida
	*/
	$urlRouterProvider.otherwise('/');

	/**
		O stateProvider é a classe onde definimos as rotas desejadas

		Cada state é um estado definido, com uma URL própria e suas variáveis.

		Os atributos de cada state são:
			URL : que define o caminho do estado
			templateUrl : que define o caminho do template que será mostrado na tela
			resolve: as variáveis que serão injetadas no controller, isto permite que o controller
				tenha as suas variáveis definidas sem a preocupação com a assincronicidade dos callbacks
			controller: é o controller que será vinculado ao template
			controllerAs: um nome user-friendly para o controller

		@class stateProvider
	*/
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
				}],
				auditoriaList : ['auditoriaService', function( auditoriaService ) {
					return auditoriaService.list();
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

		.state('projetos.detalhar', {
			url : '/detalhar/:idProjeto',
			resolve : {
				lista : function () {return[];},
				projeto : ['$stateParams', 'projetoService', function( $stateParams, projetoService ) {
					return projetoService.get($stateParams.idProjeto);
				}]			
			},
			templateUrl : 'app/components/projeto/projeto-detail-view.html',
			controller  : 'projetoController',
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