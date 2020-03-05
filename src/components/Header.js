import React from "react";
import {connect} from 'react-redux'
import {NavLink} from 'react-router-dom'
import { AppBar, Toolbar, Typography, Button, Badge } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { ShoppingCart } from "@material-ui/icons";

const useStyles = makeStyles(theme => ({
  title: {
    flexGrow: 1,
    padding: theme.spacing(3)
  },
  link: {
    textDecoration: "none",
    color: "#fff"
  }
}));



const Header = ({rentedShows}) => {
  
  const classes = useStyles();

  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" className={classes.title}>
          <Button color="inherit"><NavLink to="/" className={classes.link}>DVD Rentals</NavLink></Button>
        </Typography>
        <Typography variant="button">
          <Button color="inherit"><NavLink to="/" className={classes.link}>Home</NavLink></Button>
        </Typography>
        <Typography variant="button">
          <Button color="inherit"><NavLink to="/cart" className={classes.link}>Cart</NavLink></Button>
        </Typography>
        <Typography variant="body1">
          <Badge badgeContent={rentedShows.length} color="error">
            <ShoppingCart />
          </Badge>
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

const mapStateToProps = state => ({
  rentedShows: state.rent.rentedShows
})

export default connect(mapStateToProps)(Header);
