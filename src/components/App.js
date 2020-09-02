import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Header from './Header';
import Precios from './Precios';
import Cotizador from './Cotizador';
import Instrucciones from './Instrucciones';
import Login from './Login';
import { RUTAS } from '../helpers/constants';

const App = () => {
   const [estadoGlobal, setEstadoGlobal] = React.useState({
      hamburguesas: [],
      precios: {
         pan1: '1',
         lechuga: '1',
         queso: '1',
         carne: '1',
         pan2: '1'
      }
   });

   return (
      <BrowserRouter>
         <div className="margen">
            {/*<Header />*/}
            <Route exact path={RUTAS.login} component={Login} />
            <Route exact path={RUTAS.instrucciones} component={Instrucciones} />
            

            <Route exact path={RUTAS.precios}>
              <Header />
              <Precios
                  estadoGlobal={estadoGlobal}
                  setEstadoGlobal={setEstadoGlobal}
               />
            </Route>
            <Route exact path={RUTAS.cotizador}>
               <Header />
               <Cotizador
                  estadoGlobal={estadoGlobal}
                  setEstadoGlobal={setEstadoGlobal}
               />
            </Route>
         </div>
      </BrowserRouter>
   );
};

export default App;
