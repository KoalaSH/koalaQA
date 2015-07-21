describe("Testing Project", function() {
  var Projeto = require('../../model/Projeto.js');
  var Fase = require('../../model/Fase.js')
  var projeto;
  var fase1;
  var fase2;

  beforeEach(function() {
    projeto = new Projeto();
    fase1 = new Fase();
    fase2 = new Fase();

  });

  it("deveria dar erro ao criar as fases com nome igual", function() {
    fase1.nome="fase 1";
    fase2.nome="fase 1";
    fase1.save();
    expect(fase2.save()).toMatch(/[a-zA-Z,0-9]+/);


  })

  it("deveria dar erro pois o nome do projeto está vazio", function() {

    projeto.nome = nome;
    projeto.fases = [fase1._id, fase2._id];

    expect(projeto.nome).toEqual(nome);

    //demonstrates use of custom matcher
    expect(projeto.save()).toMatch(/[a-zA-Z,0-9]+/);
  });
});
