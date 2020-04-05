import AsyncStorage from '@react-native-community/async-storage';
import Reactotron from 'reactotron-react-native';
import { reactotronRedux } from 'reactotron-redux';

const reactotronConfig = {
  initiate: () =>
    Reactotron.setAsyncStorageHandler(AsyncStorage)
      .configure()
      .useReactNative()
      .use(reactotronRedux())
      .connect(),
  createEnhancer: () => Reactotron.createEnhancer(),
};

export default reactotronConfig;
