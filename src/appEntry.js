import React from 'react';
import { SafeAreaView, StatusBar } from 'react-native';
import FlashMessage from 'react-native-flash-message';
import { Provider as PaperProvider } from 'react-native-paper';
import { ThemeProvider } from 'styled-components';
import 'intl';
import 'intl/locale-data/jsonp/pt-BR';

import NavigationService from 'services/Navigation';

import Loading from 'components/Loading';

import theme from './style/Theme';
import Router from './router';
import Store from './store';

const styles = {
  container: {
    flex: 1,
    height: '100%',
  },
};

export default () => {
  return (
    <>
      <StatusBar barStyle="dark-content" backgroundColor={theme.primary} />
      <SafeAreaView style={styles.container}>
        <Store>
          <ThemeProvider theme={theme}>
            <PaperProvider>
              <Router ref={NavigationService.setTopLevelNavigator} />
              <Loading />
              <FlashMessage position="top" />
            </PaperProvider>
          </ThemeProvider>
        </Store>
      </SafeAreaView>
    </>
  );
};
