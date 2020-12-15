var Adm = require("../models/adm");

const AdmController = {
  
  index: (req, res, next) => {

    Adm.find().then((dado) => res.send(dado));

  }
}
    // Salvar no banco
    // const adm = new Adm({ nome: "Michel", senha:1234, email:'jeanm@mail.com'});
    // adm.save((error) => {
    //   if (error) {
    //     res.send(error);
    //     return;
    //   }





module.exports = AdmController;
