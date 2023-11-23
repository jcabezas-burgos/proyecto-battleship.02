import React from 'react'
import '../styles/gameboard.css'
import Tile from './tile'

const Gameboard = () => {

  // Tablero donde jugará el Jugador. No se visualiza nada más que sus jugadas
  
  return (
    <div className='container'>
      <div className='row d-flex'>
        <div className='tile header'></div>
        <div className='tile header'>A</div>
        <div className='tile header'>B</div>
        <div className='tile header'>C</div>
        <div className='tile header'>D</div>
        <div className='tile header'>E</div>
        <div className='tile header'>F</div>
        <div className='tile header'>G</div>
        <div className='tile header'>H</div>
        <div className='tile header'>I</div>
        <div className='tile header'>F</div>
      </div>
      <Tile />
    </div>
  )
}

export default Gameboard