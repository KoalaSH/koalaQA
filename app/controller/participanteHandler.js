var Participante = rootRequire('app/model/Participante');
var mongoose = require('mongoose');

module.exports = {
	listAll : function(response) {
		Participante.find( function(err, result) {
			if (err) {
				response.send(err);
			}
			else {
				response.json(result);
			}
		});
	},
	
	createParticipante : function( requestBody, response ) {
		var newParticipante = new Participante();
		newParticipante.nome = requestBody.nome;
		if (requestBody.papel) {
			newParticipante.papel = requestBody.papel;
		};

		newParticipante.save( function(err) {
			if (err) {
				response.json({success:false,error:err});
			} else{
				response.json({ success : true, message : 'Participante salvo com sucesso!'});
			};
		});
	},
	
	getParticipante : function( idParticipante, response ) {
		Participante.findById(idParticipante, function(err, result) {
			if (err) {
				response.json({success:false, error:err});
			} else{
				if (result) {
					response.json({success:true, resultado:result});
				} else{
					response.json({success:false, error:{message:'Participante não encontrado.'}});
				};
			};
		})
	},

	updateParticipante : function( idParticipante, requestBody, response )  {
		Participante.findById(idParticipante, function (err, result) {
			if (err) {
				response.json({success:false, error:err});
			} else{
				if (requestBody.nome != result.nome) {
					result.nome = requestBody.nome;
				}
				if (requestBody.papel != result.papel) {
					result.papel = requestBody.papel;
				}

				result.save( function (err) {
					if (err) {
						response.json({success:false, erro:err});
					} else{
						response.json({success:true, mensagem:"Participante alterado com sucesso!"});	
					};
				});
			};
		});
	},

	deleteParticipante : function (idParticipante, response) {
		Participante.findById( idParticipante ).remove(function (err ) {
			if (err) {
				response.json({success:false, error:err});
			} else{
				response.json({success:true, message:'Participante removido com sucesso!'});
			};
		})
	}
};