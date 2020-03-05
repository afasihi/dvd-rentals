import React, { useEffect } from "react";
import { connect } from "react-redux";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import axios from "axios";
import { loadData } from "../redux/actions";
import Browser from "../components/Browser";
import Cart from "../components/Cart";
import Header from "../components/Header";
import "../App.css";

const AppRouter = ({ loadData }) => {
  useEffect(() => {
    axios
      .get("http://api.tvmaze.com/search/shows?q=new")
      .then(res => {
        const shows = res.data.map(({ show }) => ({
          id: show.id,
          title: show.name,
          description: show.summary,
          image: show.image.medium,
          rented: false,
          price: (Math.random() * 100).toFixed(2)
        }));
        loadData(shows);
      })
      .catch(err => console.log(err));
  }, [loadData]);

  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route path="/" component={Browser} exact={true} />
        <Route path="/cart" component={Cart} />
      </Switch>
    </BrowserRouter>
  );
};

const mapStateToProps = dispatch => ({
  loadData: data => dispatch(loadData(data))
});

export default connect(null, mapStateToProps)(AppRouter);
