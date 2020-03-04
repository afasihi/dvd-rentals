import React from "react";
import { Provider } from "react-redux";
import store from './redux/configStore'
import AppRouter from "./router/AppRouters";
import "./App.css";

function App() {
  return (
    <Provider store={store}>
      <AppRouter />
    </Provider>
  );
}

export default App;
