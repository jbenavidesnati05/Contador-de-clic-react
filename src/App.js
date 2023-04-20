import './App.css'
import './estilos/boton.css';
import './estilos/contador.css';
import gafas from './imagenes/gafas.jpg'
import Boton from './componentes/Boton';
import Contador from './componentes/Contador';
import { useState } from 'react';


function App() {

    const [numClics, setNumClics] = useState(0);

    const manejarClic = () =>{
        setNumClics(numClics + 1) ;
    }
    const reinicarContador = () =>{
        setNumClics(0) 
    }

  return (
    <div className="App">
         <div className="frecodecamp-logo-contenedor">
            <img
                className="frecodecamp-logo"
                src={gafas}            
            >
            </img>
         </div>
         <div className='contenedor-principal'>

            <Contador
            numClics= {numClics}
            >
            </Contador>

            <Boton
                texto='Clic'
                esBotonClic={true}
                manejarClic={manejarClic}
            >
            </Boton>

            <Boton
                texto='Reiniciar'
                esBotonClic={false}
                manejarClic={reinicarContador}            
            >
            </Boton>
         </div>
    </div>
  );
}

export default App;
