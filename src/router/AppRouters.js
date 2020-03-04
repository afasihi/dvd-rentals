import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Browser from "../components/Browser";
import Cart from "../components/Cart";
import Header from '../components/Header'
import '../App.css'

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Header/>
      <Switch>
        <Route path="/" component={Browser} exact={true} />
        <Route path="/cart" component={Cart} />
      </Switch>
    </BrowserRouter>
  );
};

export default AppRouter;
