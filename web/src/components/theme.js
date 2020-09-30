import { createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles';

const Theme = createMuiTheme({
  palette: {
    primary: {
      main: '#FCE757', // votesaver yelow
    },
    secondary: {
      main: '#FCDD0B', // TODO(Danilowicz)
    },
    textSecondary: {
      main: '#4BB543', // TODO(Danilowicz)
    },
    error: {
      main: '#FF6961', // TODO(Danilowicz)
    },
  },
  typography: {
    fontFamily: [
      'Karla', // TODO(Danilowicz): font
      'sans-serif',
    ].join(','),
  },
  props: {
    MuiButton: {
      variant: 'contained',
      size: 'large',
    },
  },
  overrides: {
    MuiCssBaseline: {
      '@global': {
        '@font-face': ['Karla'], // TODO(Danilowicz): font
      },
    },
    MuiButton: {
      root: {
        padding: '0 15px',
      },
    },
  },
});

export default responsiveFontSizes(Theme);
