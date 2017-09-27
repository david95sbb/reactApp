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
                _listArray.push( <li key={ index }>{ value }</li> )
            )
        );
        return(
            <div>
                <h2>Lista de tareasss</h2>
                <input type="text" onKeyPress={ this.sendTarea.bind( this ) }/>
                <div>
                    <div>
                        <ul>
                            { _listArray }
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}

export default observer(List);
