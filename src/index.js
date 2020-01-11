import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import {
  HomeScreen,
  LoginScreen,
  BarcodeScanner,
  Dashboard,
  admin,
  Logger,
} from './screens';

const Router = createStackNavigator(
  {
    HomeScreen,
    LoginScreen,
    BarcodeScanner,
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