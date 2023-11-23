import { useContext } from "react";
import { Link } from 'react-router-dom';
import Gameboard from "../components/gameboard";
import Pcboard from "../components/pcBoard";
import { Context } from "../store/appContext";
import '../styles/App.css';
import Pickingboard from "../components/pickingBoard";

const App = () => {
  const { store } = useContext(Context);
  return (
    <div className="App">
      <header className="App-header">
        <aside><Link to='/instructions'><button className="btn btn-primary m-1">Instrucciones</button></Link></aside>
        <h1> -- Combate Naval --</h1>

        {/* Renderizado condicionado del subtítulo según momento del juego */}
        {store.ready ? 
          <h3 style={{'textTransform': 'capitalize', 'textAlign': 'center'}}>{store.turn} Tiene Que Disparar</h3> :
          <h3 style={{'textAlign': 'center', 'color': 'red'}}>Escoge la ubicación de {
            store.playerShips.carrier.length < 5 ? 'tu Portaaviones (5 Espacios)' :
            store.playerShips.vessel.length < 4 ? 'tu Carguero (4 Espacios)' :
            store.playerShips.submarine.length < 3 ? 'tu Submarino (3 Espacios)' :
            store.playerShips.cruiser.length < 3 ? 'tu Crusero (3 Espacios)' :
            'tu Bote (2 Espacios)'
          }</h3>
        }
      </header>
      {/* Renderizado del contenido según estado "ready" */}
      { 
      store.ready === false ? 
      <Pickingboard /> :
        (<>
          <h4>Ataca los barcos enemigos! </h4>
          <Gameboard />
          <h4>Acá están tus barcos: </h4>
          <Pcboard />
          <br/>
        </>
        )
        }

    <small className="fixed-bottom ms-3 mb-2"><a href="https://unsplash.com/@mafonso?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"></a>  <a href="https://unsplash.com/es/s/fotos/navy?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"></a>
  </small>
    </div>
  );
}

export default App;
