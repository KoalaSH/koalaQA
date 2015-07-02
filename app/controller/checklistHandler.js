var Checklist = rootRequire('app/model/Checklist');
var mongoose = require('mongoose');

	// nome		: {type:String, required:true},
	// descricao	: String,
	// questoes	: [{type:ObjectId, ref:'Questao'}]

module.exports = {
	listAll : function(response) {
		Checklist.find( function(err, result) {
			if (err) {
				response.send(err);
			}
			else {
				response.json(result);
			}
		});
	},
	
	createChecklist : function( requestBody, response ) {
		var newChecklist 		= new Checklist();
		newChecklist.nome 	= requestBody.nome;

		if (requestBody.descricao) {
			newChecklist.descricao = requestBody.descricao;
		}
		if (requestBody.questoes) {
			newChecklist.questoes = requestBody.questoes;
		};

		newChecklist.save( function(err) {
			if (err) {
				response.json({success:false,error:err});
			} else{
				response.json({ success : true, message : 'Checklist salvo com sucesso!'});
			};
		});
	},
	
	getChecklist : function( idChecklist, response ) {
		Checklist.findById(idChecklist, function(err, result) {
			if (err) {
				response.json({success:false, error:err});
			} else{
				if (result) {
					response.json({success:true, resultado:result});
				} else {
					response.json({success:false, error:{message:'Checklist não encontrado.'}});
				}
			};
		})
	},

	updateChecklist : function( idChecklist, requestBody, response )  {
		console.log(requestBody);
		Checklist.findById(idChecklist, function (err, result) {
			if (err) {
				response.json({success:false, error:err});
			} else{
				if (requestBody.nome != result.nome) {
					result.nome = requestBody.nome;
				}
				if (requestBody.descricao != result.descricao) {
					result.descricao = requestBody.descricao;
				}
				if (requestBody.questoes != result.questoes) {
					result.questoes = requestBody.questoes;
				}

				result.save( function (err) {
					if (err) {
						response.json({success:false, error:err});
					} else{
						response.json({success:true, mensagem:"Checklist alterado com sucesso!"});
					};
				});
			};
		});
	},

	deleteChecklist : function (idChecklist, response) {
		Checklist.findById( idChecklist ).remove(function (err ) {
			if (err) {
				response.json({success:false, error:err});
			} else{
				response.json({success:true, message:'Checklist removido com sucesso!'});
			};
		})
	}
}