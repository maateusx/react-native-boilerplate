import React from 'react';
import { ActivityIndicator } from 'react-native';
import { useStoreState } from 'easy-peasy';

import Theme from 'style/Theme';
import * as Styled from './styled';

const Loading = () => {
  const loading = useStoreState(({ main }) => main.loading);

  if (!loading) {
    return null;
  }

  return (
    <Styled.Container>
      <ActivityIndicator size="large" color={Theme.primary} />
    </Styled.Container>
  );
};

export default Loading;
