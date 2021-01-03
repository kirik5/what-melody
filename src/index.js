import React from "react";
import ReactDOM from "react-dom";
import AppContainer from "./components/app/app-container";
import {Provider} from "react-redux";
import store from "./reducers/store";


const init = (store) => {

  ReactDOM.render(
    <Provider store={store}>
      <AppContainer/>
    </Provider>,
    document.getElementById(`root`)
  );
};

init(store);
