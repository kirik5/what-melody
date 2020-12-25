import React from "react";
import ReactDOM from "react-dom";
import AppContainer from "./components/app/app-container";
import {Provider} from "react-redux";
import rootReducer from "./reducers/root-reducer";
import { composeWithDevTools } from 'redux-devtools-extension';
import {createStore, applyMiddleware, compose} from "redux";

// export const store = createStore(rootReducer);

const composeEnhancers = composeWithDevTools(
  // EXAMPLE: Add whatever middleware you actually want to use here
  applyMiddleware()
  // other store enhancers if any
)


export const store = createStore(rootReducer, composeEnhancers);

const init = () => {

  Window.store = store;

  ReactDOM.render(
    <Provider store={store}>
      <AppContainer/>
    </Provider>,
    document.getElementById(`root`)
  );
};

init();
