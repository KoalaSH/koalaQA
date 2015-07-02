var Questao = rootRequire('app/model/Questao');
var mongoose = require('mongoose');

	// nome			: {type:String, required:true},
	// resultado		: String,
	// justificativa	: String

module.exports = {
	listAll : function(response) {
		Questao.find( function(err, result) {
			if (err) {
				response.send(err);
			}
			else {
				response.json(result);
			}
		});
	},
	
	createQuestao : function( requestBody, response ) {
		var newQuestao 		= new Questao();
		newQuestao.nome 	= requestBody.nome;
		
		if (requestBody.resultado) {
			newQuestao.resultado = requestBody.resultado;
		}
		if (requestBody.justificativa) {
			newQuestao.justificativa = requestBody.justificativa;
		};

		newQuestao.save( function(err) {
			if (err) {
				response.json({success:false,error:err});
			} else{
				response.json({ success : true, message : 'Questao salvo com sucesso!'});
			};
		});
	},
	
	getQuestao : function( idQuestao, response ) {
		Questao.findById(idQuestao, function(err, result) {
			if (err) {
				response.json({success:false, error:err});
			} else{
				if (result) {
					response.json({success:true, resultado:result});
				} else {
					response.json({success:false, error:{message:'Questao não encontrado.'}});
				}
			};
		})
	},

	updateQuestao : function( idQuestao, requestBody, response )  {
		console.log(requestBody);
		Questao.findById(idQuestao, function (err, result) {
			if (err) {
				response.json({success:false, error:err});
			} else{
				if (requestBody.nome != result.nome) {
					result.nome = requestBody.nome;
				}
				if (requestBody.resultado != result.resultado) {
					result.resultado = requestBody.resultado;
				}
				if (requestBody.justificativa != result.justificativa) {
					result.justificativa = requestBody.justificativa;
				}

				result.save( function (err) {
					if (err) {
						response.json({success:false, error:err});
					} else{
						response.json({success:true, mensagem:"Questao alterado com sucesso!"});
					};
				});
			};
		});
	},

	deleteQuestao : function (idQuestao, response) {
		Questao.findById( idQuestao ).remove(function (err ) {
			if (err) {
				response.json({success:false, error:err});
			} else{
				response.json({success:true, message:'Questao removido com sucesso!'});
			};
		})
	}
}