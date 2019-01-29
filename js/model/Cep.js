class Cep{
    constructor(cep){
        if(typeof cep === 'undefined') cep = '00000000';
        if(typeof cep == 'string' && cep.length >= 8){
            this._cep = (Cep.isFormatted(cep)) ? Cep.toCepNumber(cep) : cep;
        }

        this._address = {};
        this._onaddresschange = new Event(this);
    }

    // Anexa funções interessadas na nudança de endereço.
    subscribe(fn){
        if(typeof fn === 'function'){
            this._onaddresschange.attach(fn);
        }
    }

    // "STATIC VARIABLES"

    static get _LENGTH_FORMATTED_CEP(){
        return 9;
    }

    // STATIC METHOS

    static isFormatted(cep){
        return (cep.length === Cep._LENGTH_FORMATTED_CEP);
    }

    static toCepNumber(cep){
        return (Cep.isFormatted(cep)) ? cep.split('-').join('') : cep; 
    }

    static toCepFormatted(cep){
        return (Cep.isFormatted(cep)) ? cep : cep.slice(0, 5).concat('-', cep.slice(-3));
    }

    //  GETTERS AND SETTERS

    get address(){
        return this._address;
    }

    set address(addr){
        this._address = addr;
        this._onaddresschange.notify();
        console.log("_address", this.address);
    }

    get cep(){
        return this._cep;
    }

    set cep(cep){
        this._cep = Cep.toCepNumber(cep);
    }
}