import React from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import { Movie } from "../../types";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: "flex",
      flexDirection: "column",
      width: "100%",
      paddingTop: "80%",
      position: "relative",
    },
    container: {
      position: "absolute",
      height: "100%",
      top: 0,
      left: 0,
      right: 0,
    },
    thumbnailContainer: {
      height: "80%",
    },
    thumbnail: {
      width: "100%",
      height: "100%",
      objectFit: "cover",
    },
    contentContainer: {},
    avatarContainer: {},
    textContainer: {},
    titleContainer: {},
    infoContainer: {},
  })
);

type Props = {
  movie: Movie;
};

export default function MovieItem(props: Props) {
  const { movie } = props;
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.container}>
        <div className={classes.thumbnailContainer}>
          <img
            className={classes.thumbnail}
            src={"https://source.unsplash.com/random"}
            alt="画像"
          />
        </div>
        <div className={classes.contentContainer}>
          <div className={classes.avatarContainer}></div>
          <div className={classes.textContainer}>
            <div className={classes.titleContainer}>{movie.title}</div>
            <div className={classes.infoContainer}>
              {movie.count}
              {movie.date}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
