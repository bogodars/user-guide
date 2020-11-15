import React from 'react';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import LinearProgress from '@material-ui/core/LinearProgress';

const theme = createMuiTheme({
  palette: {
    secondary: {
      main: '#01c58d',
    },
  },
});

export default function LinearDeterminate() {
  const [progress, setProgress] = React.useState(0);

  React.useEffect(() => {
    const timer = setInterval(() => {
      setProgress((oldProgress) => {
        if (oldProgress === 100) {
          return 0;
        }
        const diff = Math.random() * 10;
        return Math.min(oldProgress + diff, 100);
      });
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <MuiThemeProvider theme={theme}>
      <LinearProgress
        variant='determinate'
        value={progress}
        color='secondary'
      />
    </MuiThemeProvider>
  );
}
