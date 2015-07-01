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
			response.send( acaoHandler.listAll() );
		})
		// CREATE acao
		.post( function(request, response ) {
			response.send( acaoHandler.createAcao(request.body.acao) );
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

	
		
	
	/* FRONTEND ROUTE */
	app.get('*', function(req, res) {
        res.sendfile('./public/index.html'); // load our public/index.html file
    });
};
