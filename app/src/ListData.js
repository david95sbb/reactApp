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

    deleteItem( index ){
        this.tareas.splice( index,1 );
    }
}

var varListData = new ListData;

export default varListData;
