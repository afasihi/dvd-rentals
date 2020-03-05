import React from "react";
import {connect} from "react-redux"
import {Table, TableContainer, TableHead, TableRow, TableCell, TableBody} from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3)
  },
  cell: {
    border: "1px solid black"
  }
}));

const Cart = ({rentedShows}) => {
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
              Price
            </TableCell>
            <TableCell className={classes.cell} align="center">
              Nb Copy
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rentedShows.map(show => (
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
               Price
              </TableCell>
              <TableCell className={classes.cell} align="center">
               NB Copy
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

const mapStateToProps = state => ({
  rentedShows: state.rent.rentedShows
})

export default connect(mapStateToProps)(Cart);
