import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import {
  HomeScreen,
  LoginScreen,
  ScreenBarcodeScanner,
  Dashboard,
  admin,
  Logger,
} from './screens';

const Router = createStackNavigator(
  {
    HomeScreen,
    LoginScreen,
    ScreenBarcodeScanner,
    admin,
    Dashboard,
    Logger,
  },
  {
    initialRouteName: 'HomeScreen',
    headerMode: 'none',
  }
);

export default createAppContainer(Router);