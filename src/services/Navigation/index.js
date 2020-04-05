import { StackActions, NavigationActions } from 'react-navigation';

let _navigator;

const setTopLevelNavigator = (navigatorRef) => {
  _navigator = navigatorRef;
};

const navigate = (routeName, params) => {
  _navigator.dispatch(
    NavigationActions.navigate({
      type: NavigationActions.NAVIGATE,
      routeName,
      params: params || null,
    }),
  );
};

const popToTop = () => {
  _navigator.dispatch(StackActions.popToTop());
};

const pop = () => {
  _navigator.dispatch(StackActions.pop());
};

const reset = (routeName, params) => {
  _navigator.dispatch(
    StackActions.reset({
      index: 0,
      actions: [NavigationActions.navigate({ routeName, params })],
    }),
  );
};

export default {
  navigate,
  pop,
  popToTop,
  reset,
  setTopLevelNavigator,
};
