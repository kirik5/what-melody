import React from "react";
import ReactDOM from "react-dom";
import {Provider} from "react-redux";
import store from "./reducers/store";
import App from "./components/app/app";


const init = (store) => {
  ReactDOM.render(
    <Provider store={store}>
      <App/>
    </Provider>,
    document.getElementById(`root`)
  );
};


init(store);
