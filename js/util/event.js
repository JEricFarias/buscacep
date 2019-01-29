class Event{
    constructor(sender){
        this._sender = sender;
        // Array de funçôes a serem chamadas o sender mude.
        this._listenes = [];
    }

    attach(listener){
        this._listenes.push(listener);
    }

    // Podemos passar args.
    notify(){
        this._listenes.forEach( (listener) => {
            listener(this._sender);
        });
    }
}