import React from 'react';
import {useQuery} from '@apollo/client';
import {ThemeProvider} from 'styled-components';

import {myTheme} from '../../theme';
import {IS_LOGGED_IN} from './AppQueries.local';
import AppPresenter from './AppPresenter';
import GlobalStyles from '../../globalStyles';

const AppContainer = () => {
  const {
    data: {isLoggedIn},
  } = useQuery(IS_LOGGED_IN);
  console.log(isLoggedIn);

  return (
    <ThemeProvider theme={myTheme}>
      <GlobalStyles />
      <AppPresenter isLoggedIn={isLoggedIn} />
    </ThemeProvider>
  );
};

export default AppContainer;
