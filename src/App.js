import React from 'react';
import { SnackbarProvider } from 'notistack';
import { ThemeProvider } from '@mui/material/styles';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';

import RouteList from 'config/RouteList';
import theme from 'config/theme/theme';

const queryClient = new QueryClient();
const nodeEnv = process.env.NODE_ENV;

const App = () => (
  <ThemeProvider theme={theme}>
    <QueryClientProvider client={queryClient}>
      <SnackbarProvider
        maxSnack={5}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right'
        }}
        preventDuplicate
        autoHideDuration={5000}>
        <RouteList />
        {nodeEnv === 'development' ? <ReactQueryDevtools initialIsOpen={false} /> : null}
      </SnackbarProvider>
    </QueryClientProvider>
  </ThemeProvider>
);

export default App;
