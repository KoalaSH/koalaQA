var koalaQA = angular.module('koalaQA');

koalaQA.service('auditoriaService', ['$http', function($http) {

	return {
		list : function() {
			result = $http.get('/api/auditoria');
			return result;
		},

		get : function( idAuditoria ) {
			result = $http.get('/api/auditoria/' + idAuditoria );
			return result;
		},

		update : function( auditoria ) {
			return $http.put('/api/auditoria/' + auditoria._id, auditoria);
		},

		create : function( auditoriaData ) {
			return $http.post('/api/auditoria', auditoriaData);
		},

		delete : function( id ) {
			return $http.delete('/api/auditoria/' + id);
		}
	}
}]);