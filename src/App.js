import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Layout from './Components/Layout/Layout';
import { BrowserRouter, Route } from 'react-router-dom';
import { AnimatedSwitch } from 'react-router-transition';
import { transitionsConfig } from './config/transitions';
import Backoffice from './rutas/Backoffice';
import Public from './rutas/Public';

function App() {
  return (
    <Layout>
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
    </Layout>
  );
}

export default App;
