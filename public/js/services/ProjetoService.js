// public/js/services/ProjetoService.js
angular.module('ProjetoService', []).factory('Projeto', ['$http', function($http) {

	return {
		get : function() {
			return $http.get('/api/projeto');
		},

		create : function( projetoData ) {
			return $http.post('/api/projeto', projetoData);
		},

		delete : function( id ) {
			return $http.delete('/api/projeto/' + id);
		}
	}
}]);