import React, { useMemo } from "react";
import { Theme } from "@material-ui/core/styles";
import { createStyles, makeStyles } from "@material-ui/core/styles";
import movieData from "../samples/movies.json";
import MovieItem from "../components/MovieItem";
import Grid from "@material-ui/core/Grid";
import { Movie } from "../types";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      padding: theme.spacing(3, 4),
    },
  })
);

export default function Main() {
  const classes = useStyles();

  const movies = useMemo(() => movieData as Movie[], []);

  return (
    <div className={classes.root}>
      <Grid container spacing={2}>
        {movies.map((movie) => (
          <Grid key={movie.id} item xs={12} sm={6} md={4} lg={3} xl={2}>
            <MovieItem movie={movie} />
          </Grid>
        ))}
      </Grid>
    </div>
  );
}
