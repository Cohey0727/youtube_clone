import createMuiTheme from "@material-ui/core/styles/createMuiTheme";
import redColor from "@material-ui/core/colors/red";

const theme = createMuiTheme({
  palette: {
    primary: redColor,
  },
  overrides: {
    MuiCssBaseline: {
      "@global": {
        html: {
          WebkitFontSmoothing: "auto",
        },
      },
    },
  },
});

export default theme;
