import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import "./index.css";
import { PersistGate } from "redux-persist/integration/react";

import {Provider} from 'react-redux'
import {store, persistor} from './store/store.js'

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
<PersistGate loading={null} persistor={persistor}>


    
      <App />
      
    </PersistGate>
  </Provider>
);
