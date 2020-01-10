import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import {
  HomeScreen,
  LoginScreen,
  RegisterScreen,
  BarcodeScanner,
  ForgotPasswordScreen,
  Dashboard,
  LinksScreen,
  Logger,
 } from './screens';

const Router = createStackNavigator(
  {
    HomeScreen,
    LoginScreen,
    BarcodeScanner,
    RegisterScreen,
    ForgotPasswordScreen,
    Dashboard,
    LinksScreen,
    Logger,
  },
  {
    initialRouteName: 'HomeScreen',
    headerMode: 'none',
  }
);

export default createAppContainer(Router);