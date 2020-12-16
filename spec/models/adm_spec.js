
const Adm = require("../../app/models/adm");

describe("Modelo Adm", function () {

  beforeEach(function() {
    Adm.deleteMany({email: /mail.com/}).then(error =>{})
  })
  
  // it("Deve retornar o modelo de Adm", async () => {
  //   let dado = await Adm.find();
  //   expect(dado != undefined).toBe(true);
  // });

  // it("Deve incluir um Administrador", () => {
  //   let nome = `teste ${new Date().getTime()}`;

  //   // Salvar no banco
  //   const adm = new Adm({ nome: nome, senha: 1234, email: nome + "@mail.com" });

  //   adm.save((error) => {
  //     expect(error == undefined || error == null).toBe(true);
  //   });
  // });

  // it("Não deve incluir um Administrador repetido", () => {
  //   let nome = `teste ${new Date().getTime()}`;

  //   // Salvar no banco
  //   const adm = new Adm({ nome: nome, senha: 1234, email: nome + "@mail.com" });
  //   adm.save((error) => {
  //     const adm2 = new Adm({
  //       nome: nome,
  //       senha: 1234,
  //       email: nome + "@mail.com",
  //     });
  //     adm2.save((error) => {
  //       expect(error == undefined || error == null).toBe(false);
  //     });
  //   });
  // });

  // it("Não deve incluir um Administrador sem nome", () => {
  //   let nome = `teste ${new Date().getTime()}`;

  //   // Salvar no banco
  //   const adm = new Adm({ nome: nome, senha: 1234, email: nome + "@mail.com" });
  //   adm.save((error) => {
  //     const adm3 = new Adm({
  //       nome: null,
  //       senha: 1234,
  //       email: nome + "@mail.com",
  //     });
  //     adm3.save((error) => {
  //       expect(error == undefined || error == null).toBe(false);
  //     });
  //   });
  // });

  // it("Não deve alterar um registro", () => {
  //   let nome = `teste ${new Date().getTime()}`;

  //   // Salvar no banco
  //   const adm = new Adm({ nome: nome, senha: 1234, email: nome + "@mail.com" });
  //   adm.save((error) => {
  //     let novoNome = "JEANNN" + new Date().getTime();
  //     adm.nome = novoNome
  //     adm.save((error) => {
  //       expect(error == undefined || error == null).toBe(true);
  //       Adm.find({nome: novoNome}).then(dado => {
  //         expect(dado.length > 0 ).toBe(true)
  //       })
        

  //     });
  //   });


  // });

});
