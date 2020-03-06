import { createSelector } from "reselect";

const selectedShows = state => state.rent.shows;

const getRentedShows = selectedShows => {
  const rentedShows = selectedShows.filter(show => show.rented === true);

  const showsWithCopies = rentedShows.map(show => ({
    ...show,
    nbCopies: 1
  }));

  return showsWithCopies;
};

export default createSelector([selectedShows], getRentedShows);
