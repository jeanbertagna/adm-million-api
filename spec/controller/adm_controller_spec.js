const axios = require('axios');
const host = 'http://localhost:3000';

describe("AdmController", () => {
  describe("GET /adm.json - deve retornar uma lista de administradores", function () {
    it("deve retornar o status code de 200", async (done) => {
      const response = await axios.get(host + "/adm.json");      
        expect(response.status).toBe(200);
      done();
    });
  });
});
