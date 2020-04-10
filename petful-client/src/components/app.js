import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './home'
import PetInfo from './PetInfo/PetInfo'
import Pets_In_Line from './pets-in-line'

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
              path="/PetInfo"
              render={renderProps => {
                return <PetInfo {...renderProps} />;
              }}
            />
            <Route
              exact
              path="/PetsInLine"
              render={renderProps => {
                return <Pets_In_Line {...renderProps} />;
              }}
              />
          </Switch>
          </BrowserRouter>
        </div>
      );
    }
    
    export default App;
