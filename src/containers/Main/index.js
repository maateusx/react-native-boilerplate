import { createStackNavigator } from 'react-navigation';

import HomeScreen from './screens/Home';

const MainStack = createStackNavigator(
  {
    MAIN_HOME: HomeScreen,
  },
  {
    initialRouteName: 'MAIN_HOME',
    headerLayoutPreset: 'center',
    defaultNavigationOptions: {
      headerBackTitle: 'Voltar',
    },
  },
);

export default MainStack;
