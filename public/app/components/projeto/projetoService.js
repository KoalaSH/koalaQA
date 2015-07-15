// public/js/services/ProjetoService.js
var koalaQA = angular.module('koalaQA');

koalaQA.service('projetoService', ['$http', function($http) {

	return {
		get : function() {
			result = $http.get('/api/projeto');
			return result;
		},

		create : function( projetoData ) {
			return $http.post('/api/projeto', projetoData);
		},

		delete : function( id ) {
			return $http.delete('/api/projeto/' + id);
		}
	}
}]);