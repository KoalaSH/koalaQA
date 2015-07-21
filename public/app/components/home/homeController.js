// public/js/controllers/MainController.js
var koalaQA = angular.module('koalaQA');

koalaQA.controller('homeController', ['$state', 'projetoList', 'auditoriaList',
function( $state, projetoList, auditoriaList ) {
	this.projetos = projetoList.data;
	this.auditorias = auditoriaList.data;
}]);