import React, { useEffect } from "react";
import { connect } from "react-redux";
import { toggleRent, getRentedShows } from "../redux/actions";
import {
  Table,
  TableContainer,
  TableBody,
  TableHead,
  TableCell,
  TableRow,
  Checkbox,
  Button
} from "@material-ui/core";
import { Delete } from "@material-ui/icons";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3)
  },
  cell: {
    border: "1px solid black"
  }
}));

const useButtonStyle = makeStyles({
  rent: {
    background: "#0A79DF",
    color: "#fff",
    fontWeight: "600",
    width: "100px"
  },
  cancel: {
    background: "#E71C23",
    color: "#fff",
    fontWeight: "600",
    width: "100px"
  }
});

const Browser = ({ shows, toggleRent, getRentedShows }) => {
  useEffect(() => {
    getRentedShows(shows);
  }, [getRentedShows, shows]);

  const handleClick = show => {
    toggleRent(show.id);
  };

  const classes = useStyles();
  const ButtonClasses = useButtonStyle();
  return (
    <TableContainer className={classes.root}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell className={classes.cell} align="center">
              Image
            </TableCell>
            <TableCell className={classes.cell} align="center">
              Title
            </TableCell>
            <TableCell className={classes.cell} align="center">
              Description
            </TableCell>
            <TableCell className={classes.cell} align="center">
              Rented
            </TableCell>
            <TableCell className={classes.cell} align="center">
              Action
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {shows.map(show => (
            <TableRow key={show.id}>
              <TableCell className={classes.cell} align="center">
                <img src={show.image} alt="" width="110px" height="152px" />
              </TableCell>
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
                <Checkbox
                  checked={show.rented}
                  value={show.rented}
                  color="primary"
                />
              </TableCell>
              <TableCell className={classes.cell} align="center">
                {!show.rented ? (
                  <Button
                    onClick={() => handleClick(show)}
                    variant="contained"
                    className={ButtonClasses.rent}
                  >
                    + Rent
                  </Button>
                ) : (
                  <Button
                    onClick={() => handleClick(show)}
                    variant="contained"
                    className={ButtonClasses.cancel}
                  >
                    <Delete /> Cancel
                  </Button>
                )}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

const mapStateToProps = state => ({
  shows: state.rent.data
});

const mapDispatchToProps = dispatch => ({
  toggleRent: id => dispatch(toggleRent(id)),
  getRentedShows: shows => dispatch(getRentedShows(shows))
});

export default connect(mapStateToProps, mapDispatchToProps)(Browser);
