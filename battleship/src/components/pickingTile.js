import React, { useContext } from 'react'
import { Context } from '../store/appContext';

//Creación de casillas/losetas del tablero donde se define ubicación de los barcos
const PickingTile = () => {
    const {store, actions} = useContext(Context);
    return store.shipPicker.map((row, i) => {        
       return(
        <div key={i} className='row d-flex'>
            <aside className='tile header'>{i}</aside>
            {
                row.map((tile, j) => {
                    return (
                    <div key={j} onClick={() => actions.pick(i, j)} 
                    className='tile'
                    >
                        {store.shipPicker[i][j]}
                    </div>
                    )
                })
            }
        </div>
    )}
    );
};

export default PickingTile;