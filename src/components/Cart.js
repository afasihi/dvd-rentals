import React, { useState } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import {
  Table,
  TableContainer,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Button
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { clearRentedShows } from "../redux/actions";

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3)
  },
  cell: {
    border: "1px solid black"
  },
  link: {
    textDecoration: "none",
    color: "#fff"
  },
  container: {
    textAlign: "center"
  }
}));

const getPrice = rented => {
  const price = rented
    .map(show => show.price * show.nbc)
    .reduce((a, b) => a + b, 0);
  return price;
};

const Cart = ({ rentedShows, clearRentedShows }) => {
  const [rented, setRented] = useState(rentedShows);
  // const [price, setPrice] = useState(0)

  const handleNumberCopies = (e, show) => {
    const rentedNumber = rented.map(rent => {
      if (rent.id === show.id) {
        return {
          ...rent,
          nbc: e.target.value
        };
      } else {
        return rent;
      }
    });
    setRented(rentedNumber);
  };

  const classes = useStyles();

  return (
    <div>
      <TableContainer className={classes.root}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell className={classes.cell} align="center">
                Title
              </TableCell>
              <TableCell className={classes.cell} align="center">
                Description
              </TableCell>
              <TableCell className={classes.cell} align="center">
                Price
              </TableCell>
              <TableCell className={classes.cell} align="center">
                Nb Copy
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rented.map(show => (
              <TableRow key={show.id}>
                <TableCell className={classes.cell} align="center">
                  {show.title}
                </TableCell>
                <TableCell className={classes.cell} align="center">
                  <div
                    dangerouslySetInnerHTML={{
                      __html: show.description
                    }}
                  />
                </TableCell>
                <TableCell className={classes.cell} align="center">
                  {show.price}$
                </TableCell>
                <TableCell className={classes.cell} align="center">
                  <input
                    type="number"
                    value={show.nbc}
                    onChange={e => handleNumberCopies(e, show)}
                    min={1}
                    max={30}
                    style={{ width: "60px" }}
                  />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <div className={classes.container}>
        <p>
          Total Price: <strong>{getPrice(rented)}$</strong>
        </p>
        <Button
          variant="contained"
          color="primary"
          onClick={() => clearRentedShows()}
        >
          <Link to="/" className={classes.link}>
            Confirm
          </Link>
        </Button>
      </div>
    </div>
  );
};

const mapStateToProps = state => ({
  rentedShows: state.rent.rentedShows.map(show => ({
    ...show,
    nbc: 1
  }))
});

const mapDispatchToState = dispatch => ({
  clearRentedShows: () => dispatch(clearRentedShows())
});

export default connect(mapStateToProps, mapDispatchToState)(Cart);
