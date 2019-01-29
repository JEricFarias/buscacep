class BuscaCepController{
    constructor(model){
        this._model = model; 
    }

    getAddress(){
        this.getAddressPromises()
            .then( address => {
                this._model.address = address;
            }).catch(err => {
                console.log(err);
            })
    }

    getAddressAjax(){
        let url = this._URL;
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

    getAddressPromises(){
        let eddressPromise = new Promise((resolve, reject) => {
            let xhr = new XMLHttpRequest();
            xhr.open('GET', this._URL);
            xhr.send(null);
            xhr.onreadystatechange = function(){
                if(xhr.readyState === 4){
                    if(xhr.status === 200 || xhr.status === 304){
                        resolve(JSON.parse(xhr.responseText));
                    }else{
                        reject(JSON.parse(xhr.responseText));
                    }
                }
            }.bind(this);
            
        });

        return eddressPromise;
    }

    getAddressFetch(){
        
    }

    set cep(cep){
        this._model.cep = cep;
    }

    get _URL(){
        return `https://viacep.com.br/ws/${this._model.cep}/json/`;
    }
}