import { createAppContainer, createStackNavigator } from 'react-navigation';

import MainStack from 'containers/Main';
import SplashScreen from 'containers/Splash';

const navigator = createStackNavigator(
  {
    main: MainStack,
    splash: SplashScreen,
  },
  {
    headerMode: 'none',
    initialRouteName: 'splash',
  },
);

export default createAppContainer(navigator);
