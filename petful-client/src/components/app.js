import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './home'
import PetInfo from './PetInfo/PetInfo'
import Pets_In_Line from './pets-in-line'
import PetsAdopted from './PetsAdopted'

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
              <Route
              exact
              path="/PetsAdopted"
              render={renderProps => {
                return <PetsAdopted {...renderProps} />;
              }}
              />
          </Switch>
          </BrowserRouter>
        </div>
      );
    }
    
    export default App;
