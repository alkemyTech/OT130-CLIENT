import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route } from 'react-router-dom';
import { AnimatedSwitch } from 'react-router-transition';
import { transitionsConfig } from './config/transitions';
import Header from './Components/Header/Header';
import Backoffice from './rutas/Backoffice';
import Public from './rutas/Public';

function App() {
  return (
    <div className="App">
      <Header />
      <BrowserRouter>
        <AnimatedSwitch
          atLeave={transitionsConfig.atLeave}
          atActive={transitionsConfig.atActive}
          atEnter={transitionsConfig.atEnter}
          mapStyles={transitionsConfig.mapStyles}
        >
          <Route path="/backoffice" render={() => <Backoffice />} />
          <Route path="/" render={() => <Public />} />
        </AnimatedSwitch>
      </BrowserRouter>
    </div>
  );
}

export default App;
