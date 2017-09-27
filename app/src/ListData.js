import { extendObservable } from 'mobx';

class ListData{
    constructor(){
        extendObservable( this,
            {
                tareas : [
                    "Aprender React",
                    "Hacer una aplicacion con react"
                ]
            });
    }

    addItem( item ){
        this.tareas.push( item );
    }
}

var varListData = new ListData;

export default varListData;
