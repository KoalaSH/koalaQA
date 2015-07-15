// public/js/controllers/MainController.js
var koalaQA = angular.module('koalaQA');

koalaQA.controller('homeController', ['$state', 'projetoList',
function( $state, projetoList ) {
	this.projetos = projetoList.data;
}]);