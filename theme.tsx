import { createMuiTheme } from "@material-ui/core/styles";

// Create a theme instance.
export const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#f00"
    },
    secondary: {
      main: "#0f0"
    }
  },
  typography: {
    fontFamily: "Comic Sans MS",
    body2: {
      fontFamily: "Times New Roman",
      fontSize: "1.1rem"
    },
    h5:{
      fontFamily: "Raleway",
      fontWeight: 400,
      fontSize: "1.1rem"
    }
  },
  overrides: {
    MuiContainer: {
        root: {
          backgroundColor: '#616169',
            // padding: 0,
            '@media screen and (min-width: 100px)':{
                padding: 0,
            },
        }
    },
    MuiPaper: {
      elevation4: {
        boxShadow: 'none'
      },
      root: {
        margin: 'auto',
        maxWidth: '1024px'
      }
    },
    }
});

export default theme;