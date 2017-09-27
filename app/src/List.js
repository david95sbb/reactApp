import React, { Component } from 'react';
import { observer } from 'mobx-react'
import varListData from './ListData';

class List extends Component{
    sendTarea( event ){
        if ( event.which === 13 ) {
            varListData.addItem( event.target.value );
            event.target.value = "";
        }
    }
    render(){
        /**
         * Array list
         * @type {Array}
         * @private
         */
        let _listArray = [];
        const addToList = varListData.tareas.forEach(
            ( value, index ) => (
                _listArray.push( <li className="list-group-item" key={ index } onClick={ function () {
                    varListData.deleteItem( index )
                } } >{ value }</li> )
            )
        );
        return(
            <div className="container">
                <h2>Lista de tareasss</h2>
                <input type="text" onKeyPress={ this.sendTarea.bind( this ) }/>
                <div className="row ">
                    <div className="col-sm-12">
                        <ul className="list-group">
                            { _listArray }
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}

export default observer(List);
