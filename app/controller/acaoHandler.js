// acaoHandler.js
var Acao	= rootRequire('app/model/Acao');
var mongoose = require('mongoose');
var ObjectId = mongoose.Schema.Types.ObjectId;

module.exports = {
	listAll : Acao.find().exec(function(err, result) {
			if (err) {
				console.log(err); 
				return err;
			} 
			else {
				return result;
			};
	}), 
	createAcao : function( acao ) {
		var newAcao = new Acao();
		newAcao.nome = acao.nome;
		newAcao.responsavel = acao.responsavel;
		newAcao.dataEntrega = new Date(acao.dataEntrega);
		newAcao.situacao = acao.situacao;
		newAcao.planoDeAcao = ObjectId(acao.ObjectId);
		
		newAcao.save( function(err) {
			if (err) {
				return err;
			} else {
				return { success : true, message : 'Ação salva com sucesso!'};
			};
		});
	}
};