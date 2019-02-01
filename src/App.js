import React, { Component, Fragment } from 'react';
import {
  Route,
  BrowserRouter as Router,
  Switch,
  Redirect,
} from 'react-router-dom';

import Navigation from './components/Navigation/Navigation';
import QrCodeReader from './components/QrCodeReader/QrCodeReader';
import LecacyQrCodeReader from './components/QrCodeReader/LecacyQrCodeReader';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <Fragment>
            <header>
              <Navigation />
            </header>
            <main>
              <Switch>
                <Route exact path="/qr-reader-pwa" component={QrCodeReader} />
                <Route exact path="/qr-reader-pwa/legacy" component={LecacyQrCodeReader} />
                <Redirect to="/qr-reader-pwa" />
              </Switch>
            </main>
          </Fragment>
        </Router>
      </div>
    );
  }
}

export default App;
