import React from "react";
import { AppBar, Toolbar, Typography, Button, Badge } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { ShoppingCart } from "@material-ui/icons";

const useStyles = makeStyles(theme => ({
  title: {
    flexGrow: 1,
    padding: theme.spacing(3)
  }
}));

const Header = () => {
  const classes = useStyles();
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" className={classes.title}>
          <Button color="inherit">DVD Rentals</Button>
        </Typography>
        <Typography variant="button">
          <Button color="inherit">Home</Button>
        </Typography>
        <Typography variant="button">
          <Button color="inherit">Cart</Button>
        </Typography>
        <Typography variant="body1">
          <Badge badgeContent={13} color="error">
            <ShoppingCart />
          </Badge>
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
