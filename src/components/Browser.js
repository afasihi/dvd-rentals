import React, { useEffect } from "react";
import { connect } from "react-redux";
import axios from "axios";
import { LoadData } from "../redux/actions";
import {
  Table,
  TableContainer,
  TableBody,
  TableHead,
  TableCell,
  TableRow
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3)
  },
  cell: {
    border: "1px solid black"
  }
}));

const Browser = props => {
  useEffect(() => {
    axios
      .get("http://api.tvmaze.com/search/shows?q=the-witcher")
      .then(res => {
        const shows = res.data.map(({ show }) => ({
          id: show.id,
          title: show.name,
          description: show.summary,
          image: show.image.medium
        }));
        props.LoadData(shows);
      })
      .catch(err => console.log(err));
  }, []);

  const classes = useStyles();
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
          {props.shows.map(show => (
            <TableRow key={show.id}>
              <TableCell className={classes.cell} align="center">
                <img src={show.image} alt="" />
              </TableCell>
              <TableCell className={classes.cell} align="center">
                {show.title}
              </TableCell>
              <TableCell className={classes.cell} align="center">
                {show.description}
              </TableCell>
              <TableCell className={classes.cell} align="center">
                Rented
              </TableCell>
              <TableCell className={classes.cell} align="center">
                Action
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
  LoadData: data => dispatch(LoadData(data))
});

export default connect(mapStateToProps, mapDispatchToProps)(Browser);
