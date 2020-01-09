import React, { memo } from 'react';
import Background from '../components/Background';
import Logo from '../components/Logo';
import Header from '../components/Header';
import Button from '../components/Button';
import Paragraph from '../components/Paragraph';

const HomeScreen = ({ navigation }) => (
  <Background>
    <Logo />
    <Paragraph>
      The easiest way to track and trace trees.
    </Paragraph>
    <Button mode="outlined" onPress={() => navigation.navigate('LoginScreen')}>
      Login
    </Button>

    <Button
      mode="outlined"
      onPress={() => navigation.navigate('BarcodeScanner')}
    >
      Scan QR-Code
    </Button>
  </Background>
);

export default memo(HomeScreen);
