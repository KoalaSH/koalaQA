// public/js/services/faseService.js
var koalaQA = angular.module('koalaQA');

koalaQA.service('faseService', ['$http', function($http) {

	return {
		list : function() {
			result = $http.get('/api/fase');
			return result;
		},

		get : function( idFase ) {
			result = $http.get('/api/fase/' + idFase );
			return result;
		},

		update : function( fase ) {
			return $http.put('/api/fase/' + fase._id, fase);
		},

		create : function( faseData ) {
			return $http.post('/api/fase', faseData);
		},

		delete : function( id ) {
			return $http.delete('/api/fase/' + id);
		},

		search : function ( ids ) {
			return $http.post('/api/fase/buscar', ids);
		}
	}
}]);