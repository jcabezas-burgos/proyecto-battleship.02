import React, { useContext } from 'react'
import { Context } from '../store/appContext';

//Creación de cada casilla/loseta con función onclick y estilo condicionado al resultado de la función de disparo.
const Tile = () => {
    const {store, actions} = useContext(Context);
    return store.playerBoard.map((row, i) => {        
       return(
        <div key={i} className='row d-flex'>
            <aside className='tile header'>{i}</aside>
            {
                row.map((tile, j) => {
                    return (
                    <div key={j} onClick={() => actions.assign(i, j)} 
                    className='tile' 
                    style={{ color: store.playerBoard[i][j] === '~~' ? 'blue' : 'red' }}
                    >
                        {store.playerBoard[i][j]}
                    </div>
                    )
                })
            }
        </div>
    )}
    );
};

export default Tile;