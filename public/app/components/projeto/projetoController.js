// public/js/controllers/ProjetoCtrl.js
var koalaQA = angular.module('koalaQA');

koalaQA.controller('projetoController', ['$state', 'projetoService', 'lista', 'projeto',
function( $state, projetoService, lista, projeto ) {
	
	/**
		O atributo projeto, contém uma classe projeto que pode ser usada e atualizada na view

		@attribute projeto
	*/
	this.projeto = {};
	projetoData = projeto.data;

	if (projetoData) {
		if (projetoData.success) {
			this.projeto = projetoData.resultado;
			this.manter = "Editar";
		} else {
			this.manter="Incluir";
		}
	};

	this.lista = lista.data;
	
	/**
		Verifica se a operação é um update ou create, então chama o método adequado do serviço

		@method salvar
	*/
	this.salvar = function() {
		if (projeto._id) {
			projetoService.update( this.projeto )
			.then( function() {
				$state.go('projetos.list');
			});
		} else{
			projetoService.create( this.projeto )
			.then( function() {
				$state.go('projetos.list');
			});
		};
	};

}]);