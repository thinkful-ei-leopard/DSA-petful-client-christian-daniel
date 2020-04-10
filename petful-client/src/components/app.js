import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './home'
import Adoption from './adoption'

function App() {
    return (
        <div className="App">
        <BrowserRouter>
          <Switch>
            <Route
              exact
              path="/"
              render={renderProps => {
                return <Home {...renderProps} />;
              }}
            />
            <Route
              exact
              path="/Adoption"
              render={renderProps => {
                return <Adoption {...renderProps} />;
              }}
            />
          </Switch>
          </BrowserRouter>
        </div>
      );
    }
    
    export default App;
