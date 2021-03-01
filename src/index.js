import React from "react";
import ReactDOM from "react-dom";
import AppContainer from "./components/app/app-container";
import {Provider, useDispatch} from "react-redux";
import store from "./reducers/store";
import {fetchQuestions} from "./reducers/question-slice";


const init = (store) => {

  ReactDOM.render(
    <Provider store={store}>
      <AppContainer/>
    </Provider>,
    document.getElementById(`root`)
  );
};

init(store);
