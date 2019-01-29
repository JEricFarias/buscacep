class BuscaCepController{
    constructor(model){
        this._model = model; 
    }

    getAddressAjax(){
        let url = `https://viacep.com.br/ws/${this._model.cep}/json/`;
        let xhr = new XMLHttpRequest();
        xhr.open('GET', url);
        xhr.send(null);
        // Se usar arrow não será necessario o uso do bind;
        xhr.onreadystatechange = function(){
            if(xhr.readyState === 4){
                if(xhr.status === 200 || xhr.status === 304){
                    this._model.address = JSON.parse(xhr.responseText);
                }
            }
        }.bind(this);
    }

    set cep(cep){
        this._model.cep = cep;
    }
}