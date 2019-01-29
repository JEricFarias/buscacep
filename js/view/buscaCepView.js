class BuscaCepView{
    constructor(seletor, model, controller){
        this.$seletor = blg.$(seletor);
        this.$seletor.innerHTML = this.getTemplate();
        this._controller = controller;

        let setUpModel = (model) => {
            this.model = model;
            this.model.subscribe(this.updateView.bind(this));
        }

        let setUpEvents = () => {
            let formBusca = blg.$("#buscacep form");
            formBusca.addEventListener("submit", function(e){
                e.preventDefault();

                this._controller.cep = formBusca.querySelector("#cep").value;
                this._controller.getAddress();
            }.bind(this));

            // --- To DO Validar o cep.
        }
        setUpModel(model);
        setUpEvents();
    }

    updateView(){
        let $inputs = blg.$$("#cepForm input");
        $inputs.forEach((node, index) => {
            if(index > 0){
                node.value = this.model.address[node.name];
            }
        });
    }

    getTemplate(){
        return `
            <form id="cepForm" action="">
                <div class="from-group">
                    <label for="cep">CEP</label>
                    <input type="text" name="cep" id="cep" class="form-control" aria-describedby="cepHelp" placeholder="digite o cep" maxlength="9">
                    <small id="cepHelp" class="form-text text-muted">Digite o cep com ou sem o formatação</small>
                    <button class="btn btn-primary btn-sm btn-block" type="submit">Pesquesar!</button>
                </div>
                <br>	
                <div class="form-group">
                    <label for="logradouro">Rua</label>
                    <input type="text" name="logradouro" id="logradouro" class="form-control" disabled>
                </div>
                <div class="form-group">
                        <label for="numero">N°</label>
                        <input type="text" name="numero" id="numero" class="form-control" disabled>
                </div>
                <div class="form-group">
                    <label for="complemento">Complemento</label>
                    <input type="text" name="complemento" id="complemento" class="form-control" disabled>
                </div>
                <div class="form-group">
                    <label for="bairro">Bairro</label>
                    <input type="text" name="bairro" id="bairro" class="form-control" disabled>
                </div>
                <div class="form-group">
                    <label for="localidade">Localidade</label>
                    <input type="text" name="localidade" id="localidade" class="form-control" disabled>
                </div>
                <div class="form-group">
                    <label for="uf">UF</label>
                    <input type="text" name="uf" id="uf" class="form-control" disabled>
                </div>
            </form>
        `
    }
}