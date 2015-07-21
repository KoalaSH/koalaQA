// public/js/controllers/ProjetoCtrl.js
var koalaQA = angular.module('koalaQA');

koalaQA.controller('projetoController', ['$state', 'projetoService', 'lista', 'projeto',
function( $state, projetoService, lista, projeto ) {
	
	/**
		O atributo projeto, contém uma classe projeto que pode ser usada e atualizada na view

		@attribute projeto
	*/
	this.manter = "";
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
		if ( typeof this.projeto._id !== "undefined" ) {
			projetoService.update( this.projeto )
			.then( function() {
				$state.go('projetos.list');
			});
		} else {
			console.log(projeto);
			projetoService.create( this.projeto )
			.then( function() {
				$state.go('projetos.list');
			});
		};
	};

	this.excluir = function( projeto ) {
		bootbox.confirm("Você tem certeza que deseja excluir este proejto?", function(result) {
			projetoService.delete( projeto._id )
			.then( function() {
				var index = lista.data.indexOf(projeto);
				lista.data.splice(index, 1);
			});
		});
	}

}]);