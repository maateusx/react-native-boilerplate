import React, { useEffect } from 'react';
import NavigationService from 'services/Navigation';
import * as Styled from './styled';
import { Text } from 'react-native';

const SplashScreen = () => {
  useEffect(() => {
    setTimeout(() => {
      NavigationService.reset('main');
    }, 2500);
  }, []);

  return (
    <Styled.Container>
      <Text>Splash</Text>
    </Styled.Container>
  );
};

export default SplashScreen;
