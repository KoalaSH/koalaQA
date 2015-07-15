/* global rootRequire */
// ROUTES.JS

// require the class handlers
var acaoHandler 		= rootRequire('app/controller/acaoHandler');
var auditoriaHandler 	= rootRequire('app/controller/auditoriaHandler');
var checklistHandler 	= rootRequire('app/controller/checklistHandler');
var itemAuditavelHandler = rootRequire('app/controller/itemAuditavelHandler');
var participanteHandler	= rootRequire('app/controller/participanteHandler');
var planoDeAcaoHandler	= rootRequire('app/controller/planoDeAcaoHandler');
var planoDeQualidadeHandler = rootRequire('app/controller/planoDeQualidadeHandler');
var projetoHandler		= rootRequire('app/controller/projetoHandler');

module.exports = function(app) {
	// define routes
	/*
		middleware to use for all requests
		Will be used for authentication in the future
	*/
	app.use(function(req, res, next) {
	    // do logging
	    console.log('API beeing used ...');
	    next(); // make sure we go to the next routes and don't stop here
	});

	app.get('/api',	function(request, response) {
		response.json({message : 'Welcome to our API!'});
	});

	/* 
		Acao Routers 
	*/
	// RETRIEVE all acao objects
	app.route('/api/acao')
		.get( function( request, response ) {
			acaoHandler.listAll( response );
		})
		// CREATE acao
		.post( function(request, response ) {
			acaoHandler.createAcao(request.body, response);
		});
	app.route('/api/acao/:idAcao')
		.get( function( request, response ) {
			acaoHandler.getAcao( request.params.idAcao, response );
		})
		.put( function( request, response ) {
			acaoHandler.updateAcao( request.params.idAcao, request.body, response );
		})
		.delete( function( request, response ) {
			acaoHandler.deleteAcao( request.params.idAcao, response );
		});

	/*
		Auditoria Router
	*/
	app.route('/api/auditoria')
		.get( function( request, response ) {
			auditoriaHandler.listAll( response );
		})
		.post( function(request, response ) {
			auditoriaHandler.createAcao(request.body, response);
		});
	app.route('/api/auditoria/:idAuditoria')
		.get( function( request, response ) {
			auditoriaHandler.getAcao( request.params.idAuditoria, response );
		})
		.put( function( request, response ) {
			auditoriaHandler.updateAcao( request.params.idAuditoria, request.body, response );
		})
		.delete( function( request, response ) {
			auditoriaHandler.deleteAcao( request.params.idAuditoria, response );
		});

	/*
		Checklist Router
	*/
	app.route('/api/checklist')
		.get( function( request, response ) {
			checklistHandler.listAll( response );
		})
		.post( function(request, response ) {
			checklistHandler.createAcao(request.body, response);
		});
	app.route('/api/checklist/:idChecklist')
		.get( function( request, response ) {
			checklistHandler.getAcao( request.params.idChecklist, response );
		})
		.put( function( request, response ) {
			checklistHandler.updateAcao( request.params.idChecklist, request.body, response );
		})
		.delete( function( request, response ) {
			checklistHandler.deleteAcao( request.params.idChecklist, response );
		});

	/*
		Fase Router
	*/
	app.route('/api/fase')
		.get( function( request, response ) {
			faseHandler.listAll( response );
		})
		.post( function(request, response ) {
			faseHandler.createAcao(request.body, response);
		});
	app.route('/api/fase/:idFase')
		.get( function( request, response ) {
			faseHandler.getAcao( request.params.idFase, response );
		})
		.put( function( request, response ) {
			faseHandler.updateAcao( request.params.idFase, request.body, response );
		})
		.delete( function( request, response ) {
			faseHandler.deleteAcao( request.params.idFase, response );
		});

	/*
		ItemAuditavel Router
	*/
	app.route('/api/item_auditavel')
		.get( function( request, response ) {
			itemAuditavelHandler.listAll( response );
		})
		.post( function(request, response ) {
			itemAuditavelHandler.createAcao(request.body, response);
		});
	app.route('/api/item_auditavel/:idItemAuditavel')
		.get( function( request, response ) {
			itemAuditavelHandler.getAcao( request.params.idItemAuditavel, response );
		})
		.put( function( request, response ) {
			itemAuditavelHandler.updateAcao( request.params.idItemAuditavel, request.body, response );
		})
		.delete( function( request, response ) {
			itemAuditavelHandler.deleteAcao( request.params.idItemAuditavel, response );
		});

	/*
		Participante Routers
	*/
	app.route('/api/participante')
		// LIST Projetos
		.get( function( request, response ) {
			participanteHandler.listAll(response);
		})
		// CREATE Projeto
		.post( function( request, response ) {
			participanteHandler.createParticipante( request.body, response );
		});
	app.route('/api/participante/:idParticipante')
		// GET Participante
		.get( function( request, response ) {
			participanteHandler.getParticipante( request.params.idParticipante, response );
		})
		// UPDATE Participante
		.put( function( request, response ) {
			participanteHandler.updateParticipante(request.params.idParticipante, request.body, response);
		})
		// REMOVE Participante
		.delete( function( request, response ) {
			participanteHandler.deleteParticipante(request.params.idParticipante, response);
		});

	/*
		PlanoDeAcao Router
	*/
	app.route('/api/plano_de_acao')
		.get( function( request, response ) {
			planoDeAcaoHandler.listAll( response );
		})
		.post( function(request, response ) {
			planoDeAcaoHandler.createAcao(request.body, response);
		});
	app.route('/api/plano_de_acao/:idPlanoDeAcao')
		.get( function( request, response ) {
			planoDeAcaoHandler.getAcao( request.params.idPlanoDeAcao, response );
		})
		.put( function( request, response ) {
			planoDeAcaoHandler.updateAcao( request.params.idPlanoDeAcao, request.body, response );
		})
		.delete( function( request, response ) {
			planoDeAcaoHandler.deleteAcao( request.params.idPlanoDeAcao, response );
		});
	
	/*
		PlanoDeQualidade Router
	*/
	app.route('/api/plano_de_qualidade')
		.get( function( request, response ) {
			planoDeQualidadeHandler.listAll( response );
		})
		.post( function(request, response ) {
			planoDeQualidadeHandler.createAcao(request.body, response);
		});
	app.route('/api/plano_de_qualidade/:idPlnaoDeQualidade')
		.get( function( request, response ) {
			planoDeQualidadeHandler.getAcao( request.params.idPlnaoDeQualidade, response );
		})
		.put( function( request, response ) {
			planoDeQualidadeHandler.updateAcao( request.params.idPlnaoDeQualidade, request.body, response );
		})
		.delete( function( request, response ) {
			planoDeQualidadeHandler.deleteAcao( request.params.idPlnaoDeQualidade, response );
		});

	/*
		Projeto Routers
	*/
	app.route('/api/projeto')
		// GET Projetos
		.get( function( request, response ) {
			projetoHandler.listAll(response);
		})
		// CREATE Projeto
		.post( function( request, response ) {
			projetoHandler.createProjeto( request.body, response );
		});

	app.route('/api/projeto/:idProjeto')
		// GET Projeto
		.get( function( request, response ) {
			projetoHandler.getProjeto( request.params.idProjeto, response);
		})
		// UPDATE Projeto
		.put( function( request, response ) {
			projetoHandler.updateProjeto(request.params.idProjeto, request.body, response);
		})
		// REMOVE Projeto
		.delete( function( request, response ) {
			projetoHandler.deleteProjeto(request.params.idProjeto, response);
		});

	/*
		Questao Router
	*/
	app.route('/api/questao')
		.get( function( request, response ) {
			questaoHandler.listAll( response );
		})
		.post( function(request, response ) {
			questaoHandler.createAcao(request.body, response);
		});
	app.route('/api/questao/:idQuestao')
		.get( function( request, response ) {
			questaoHandler.getProjeto( request.params.idQuestao, response);
		})
		.put( function( request, response ) {
			questaoHandler.updateProjeto(request.params.idQuestao, request.body, response);
		})
		.delete( function( request, response ) {
			questaoHandler.deleteProjeto(request.params.idQuestao, response);
		});

		
	
	/* FRONTEND ROUTE */
	app.get('*', function(req, res) {
        res.sendfile('./public/index.html'); // load our public/index.html file
    });
};
