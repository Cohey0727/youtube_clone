import { makeStyles, Theme } from "@material-ui/core/styles";
import TopBar from "./components/TopBar";
import SideBar from "./components/SideBar";
import { topBarHeight } from "./components/TopBar/TopBar";
import Main from "./pages/Main";

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    height: "100vh",
    width: "100vw",
  },
  topBarContainer: {
    position: "fixed",
    width: "100vw",
  },
  bodyContainer: {
    height: "100vh",
    width: "100vw",
    boxSizing: "border-box",
    paddingTop: topBarHeight.md,
    [theme.breakpoints.down("xs")]: {
      paddingTop: topBarHeight.xs,
    },
    display: "flex",
  },
  sideBarContainer: {
    position: "fixed",
    height: "100%",
  },
  mainContainer: {
    height: "100%",
    width: "100%",
    boxSizing: "border-box",
    backgroundColor: theme.palette.grey[50],
    paddingLeft: theme.spacing(7),
    [theme.breakpoints.up("sm")]: {
      paddingLeft: theme.spacing(9),
    },
  },
}));

function App() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.topBarContainer}>
        <TopBar />
      </div>
      <div className={classes.bodyContainer}>
        <div className={classes.sideBarContainer}>
          <SideBar />
        </div>
        <div className={classes.mainContainer}>
          <Main />
        </div>
      </div>
    </div>
  );
}

export default App;
