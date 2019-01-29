// async let buscaCep;
let cep = new Cep();
let buscaCepController = new BuscaCepController(cep);
let buscaCepView = new BuscaCepView("#buscacep", cep, buscaCepController);

// new Cep("61659-120").getAddressAjax();