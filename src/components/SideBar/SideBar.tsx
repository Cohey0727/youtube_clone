import React from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import MailIcon from "@material-ui/icons/Mail";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      backgroundColor: theme.palette.background.paper,
      flexShrink: 0,
      height: "100%",
      whiteSpace: "nowrap",
      overflowX: "hidden",
      width: theme.spacing(7),
      [theme.breakpoints.up("sm")]: {
        width: theme.spacing(9),
      },
    },
    listItem: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
    listIcon: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
  })
);

export default function SideBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <List>
        {["Inbox", "Starred", "Send email", "Drafts"].map((text, index) => (
          <ListItem button key={text} className={classes.listItem}>
            <ListItemIcon className={classes.listIcon}>
              {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
            </ListItemIcon>
          </ListItem>
        ))}
      </List>
    </div>
  );
}
