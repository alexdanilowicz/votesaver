import { createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles';

const Theme = createMuiTheme({
  palette: {
    primary: {
      main: '#FFDE59', // votesaver yellow
    },
    secondary: {
      main: '#FFD119', // votersaver dark yellow
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
