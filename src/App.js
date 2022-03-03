import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { AnimatedSwitch } from 'react-router-transition';
import { transitionsConfig } from './config/transitions';
import Backoffice from './Backoffice';
import Public from './routes/Public';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  return (
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
  );
}

export default App;
