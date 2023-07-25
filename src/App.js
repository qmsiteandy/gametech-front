import React, { useReducer,useState } from 'react';
import { BrowserRouter } from "react-router-dom";
import Header from './components/Header'
import Main from './components/Main'
import Footer from './components/Footer'

import './style.css';

import { StateContext, DispatchContext } from "./contexts"
import { initialAppState, appReducer } from "./reducers/appReducer"

function App() {
  const [state, dispatch] = useReducer(appReducer, initialAppState)
  return (
    <DispatchContext.Provider value={dispatch}>
      <StateContext.Provider value={state}>
        <BrowserRouter>
          <body class="grid-container">
            <Header />
            <Main />
            <Footer />
          </body>
        </BrowserRouter>
      </StateContext.Provider>
    </DispatchContext.Provider>
  );
}

export default App;
