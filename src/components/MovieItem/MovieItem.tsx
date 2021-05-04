import React from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import { Movie } from "../../types";
import { Typography } from "@material-ui/core";
import Avatar from "@material-ui/core/Avatar";
import { LineWeight } from "@material-ui/icons";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: "flex",
      flexDirection: "column",
      width: "100%",
      paddingTop: "92%",
      position: "relative",
    },
    contentContainer: {
      position: "absolute",
      height: "100%",
      top: 0,
      left: 0,
      right: 0,
    },
    thumbnailContainer: {
      height: "72%",
    },
    thumbnail: {
      width: "100%",
      height: "100%",
      objectFit: "cover",
    },
    discriptionContainer: {
      padding: theme.spacing(1, 0),
      display: "flex",
    },
    avatarContainer: {},
    textContainer: {
      margin: theme.spacing(0, 2),
    },
    titleContainer: {},
    title: {
      fontSize: "1.15rem",
      lineWHeight: 1.15,
    },
    infoContainer: {
      margin: theme.spacing(0.5, 0, 0),
    },
    info: {
      ...theme.typography.body2,
      lineHeight: 1.25,
      color: theme.palette.grey[700]
    },
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
      <div className={classes.contentContainer}>
        <div className={classes.thumbnailContainer}>
          <img
            className={classes.thumbnail}
            src={"https://source.unsplash.com/random"}
            alt="thumbnail"
          />
        </div>
        <div className={classes.discriptionContainer}>
          <div className={classes.avatarContainer}>
            <Avatar alt={movie.author} src={movie.author} />
          </div>
          <div className={classes.textContainer}>
            <div className={classes.titleContainer}>
              <Typography variant="h6" className={classes.title}>
                {movie.title}
              </Typography>
            </div>
            <div className={classes.infoContainer}>
              <Typography className={classes.info}>{movie.author}</Typography>
              <Typography className={classes.info}>
                {movie.count}回視聴・{movie.date}
              </Typography>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
