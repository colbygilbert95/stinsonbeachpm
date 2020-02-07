import React from "react";
import ReactDOM from "react-dom";
import { createStore, applyMiddleware, compose } from "redux";
import "./index.css";
import App from "./App";
import rootReducer from "./store/reducers/rootReducer";
import { Provider } from "react-redux";
import * as serviceWorker from "./serviceWorker";
import thunk from "redux-thunk";

const store = createStore(rootReducer, compose(applyMiddleware(thunk)));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

serviceWorker.unregister();
