import { makeStyles, Theme } from "@material-ui/core/styles";
import TopBar from "./components/TopBar";
import SideBar from "./components/SideBar";
import { topBarHeight } from "./components/TopBar/TopBar";
import Main from "./pages/Main";
import "react-perfect-scrollbar/dist/css/styles.css";
import PerfectScrollbar from "react-perfect-scrollbar";

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    height: "100vh",
    width: "100vw",
  },
  topBarContainer: {
    position: "fixed",
    width: "100vw",
    zIndex: 1,
    top: 0,
    right: 0,
    left: 0,
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
    zIndex: 1,
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
      <div className={classes.bodyContainer}>
        <div className={classes.sideBarContainer}>
          <SideBar />
        </div>
        <PerfectScrollbar className={classes.mainContainer}>
          <Main />
        </PerfectScrollbar>
      </div>
      <div className={classes.topBarContainer}>
        <TopBar />
      </div>
    </div>
  );
}

export default App;
