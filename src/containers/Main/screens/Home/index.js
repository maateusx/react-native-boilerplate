import React from 'react';
import { Text } from 'react-native';

import Screen from 'components/Screen';

import Theme from 'style/Theme';

const Home = () => {
  return (
    <Screen backgroundColor={Theme.primary} keyboardShouldPersistTaps="handled">
      <Text>Main Screen</Text>
    </Screen>
  );
};

Home.navigationOptions = {
  header: null,
};

export default Home;
