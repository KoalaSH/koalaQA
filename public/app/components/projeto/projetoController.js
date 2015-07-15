// public/js/controllers/ProjetoCtrl.js
var koalaQA = angular.module('koalaQA');

koalaQA.controller('projetoController', ['$state', 'projetoService', 'lista', 'projeto',
function( $state, projetoService, lista, projeto ) {
	
	projetoData = projeto.data;

	if (projetoData) {
		if (projetoData.success) {
			this.projeto = projetoData.resultado;
			this.manter = "Editar";
		} else {
			this.projeto = {};
			this.manter="Incluir";
		}
	};

	this.lista = lista.data;
	
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