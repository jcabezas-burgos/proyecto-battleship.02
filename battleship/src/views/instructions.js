import React from 'react'
import { Link } from 'react-router-dom'

const Instructions = () => {
  return (
    <>
      <h1>Instrucciones para jugar:</h1>
      <ol className='bg-light m-2'>
        <li>
          Primero debes seleccionar la ubicación de tus barcos.
          <ul>
            <li>
              En el subtítulo se indica Qué Barco debes ubicar y cuántos
              espacios ocupa.
              <br />
            </li>
            <br />
            <li>
              Debes elegir el espacio donde irá la punta de tu Barco, procurando
              que haya al menos la cantidad de espacios del barco hacia el
              final.
              <br />
              <em>
                Por ejemplo, el Portaaviones ocupa 5 espacios, por lo que máximo
                podría ir en la casilla 5 verticalmente, o en la casilla F
                horizontalmente.
              </em>
            </li>
            <br />
            <li>
              Decide si quieres que tu barco esté{' '}
              <strong>vertical u horizontal</strong>, presionando la casilla
              debajo de tu selección (vertical) o la de su derecha (horizontal).
              <br />
            </li>
            <br />
            <li>
              Si presionas sobre una casilla <strong>diagonal</strong> o en una{' '}
              <em>que no sea la siguiente hacia derecha o abajo</em> se
              desplegará una alerta indicando el error de selección.
              <br />
            </li>
          </ul>
        </li>
        <br />
        <li>
          Una vez que hayas posicionado tus 5 Barcos, comenzará la fase de
          ataques.
        </li>
        <br />
        <li>
          Por turnos (comenzando por el Jugador), se disparará a una casilla.{' '}
          <br />
          <strong>No se puede repetir</strong> el mismo disparo 2 veces.
        </li>
        <br />
        <li>
          <ul>
            <li>
              Si aciertas el disparo, destruirás una parte del barco del
              enemigo, se desplegará un mensaje de{' '}
              <span style={{ background: 'red' }}>
                <strong>FUEGO!</strong>
              </span>{' '}
              y el tablero se marcará con una 'X'.
            </li>
            <br />
            <li>
              Si erras el disparo, la bala llegará al agua, por lo que se
              desplegará un mensaje{' '}
              <span style={{ background: 'blue' }}>
                <strong>AGUA!</strong>
              </span>{' '}
              y el tablero se marcará con olas '~~'.
              <br />
            </li>
            <br />
            <li>
              Cuando destruyes la última parte de un barco enemigo, lo hundes.
              Se despliega un mensaje de{' '}
              <span style={{ background: 'yellow' }}>'Hundido!'</span>
            </li>
          </ul>
        </li>
        <br />
        <li>
          Ataca a tu enemigo en el tablero blanco, y ve la ubicación de tus
          barcos y los ataques de tu enemigo contra ti en el tablero negro.
          <br />
        </li>
        <br/>
        <li>
          El primero en <em>Hundir</em> los barcos del enemigo, gana.
          <br />
        </li>
        <br />
      </ol>
      <Link to='/'>
        <button className='btn btn-primary m-1'>Volver</button>
      </Link>
    </>
  )
}

export default Instructions