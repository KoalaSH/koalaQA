// public/js/controllers/ProjetoCtrl.js
var koalaQA = angular.module('koalaQA');

koalaQA.controller('projetoController', ['$state', 'projetoService', 'lista', 'projeto',
function( $state, projetoService, lista, projeto ) {
	
	this.projeto = projeto.resultado;

	this.lista = lista.data;

}]);