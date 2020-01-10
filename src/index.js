import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import {
  HomeScreen,
  LoginScreen,
  RegisterScreen,
  BarcodeScanner,
  ForgotPasswordScreen,
  Dashboard,
  admin,
  LinksScreen,
 } from './screens';

const Router = createStackNavigator(
  {
    HomeScreen,
    LoginScreen,
    BarcodeScanner,
    RegisterScreen,
    admin,
    ForgotPasswordScreen,
    Dashboard,
    LinksScreen,
  },
  {
    initialRouteName: 'HomeScreen',
    headerMode: 'none',
  }
);

export default createAppContainer(Router);