// public/js/services/ProjetoService.js
var koalaQA = angular.module('koalaQA');

koalaQA.service('projetoService', ['$http', function($http) {

	return {
		list : function() {
			result = $http.get('/api/projeto');
			return result;
		},

		get : function( idProjeto ) {
			result = $http.get('/api/projeto/' + idProjeto );
			return result;
		},

		update : function( projeto ) {
			return $http.put('/api/projeto/' + projeto._id, projeto);
		},

		create : function( projetoData ) {
			return $http.post('/api/projeto', projetoData);
		},

		delete : function( id ) {
			return $http.delete('/api/projeto/' + id);
		}
	}
}]);