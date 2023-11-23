import React from 'react'
import PcTile from './pcTile'

//Tablero de juego del PC. Se visualizan los barcos que puso el jugador y las jugadas del PC
const Pcboard = () => {
  return (
    <div className='container'>
      <div className='row d-flex'>
        <div className='pctile header'></div>
        <div className='pctile header'>A</div>
        <div className='pctile header'>B</div>
        <div className='pctile header'>C</div>
        <div className='pctile header'>D</div>
        <div className='pctile header'>E</div>
        <div className='pctile header'>F</div>
        <div className='pctile header'>G</div>
        <div className='pctile header'>H</div>
        <div className='pctile header'>I</div>
        <div className='pctile header'>F</div>
      </div>
      <PcTile />
    </div>
  )
}

export default Pcboard