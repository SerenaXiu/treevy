import React, { memo } from 'react';
import Background from '../components/Background';
import Logo from '../components/Logo';
import Header from '../components/Header';
import Paragraph from '../components/Paragraph';
import BackButton from '../components/BackButton';
import Button from '../components/Button';

const Dashboard = ({ navigation }) => (
  <Background>
    <Logo />
    <Header>Choose your function</Header>

    <Button mode="outlined" onPress={() => navigation.navigate('admin')}>
      Admin
    </Button>
    <Button mode="outlined" onPress={() => navigation.navigate('Logger')}>
      Logger
    </Button>
    <BackButton goBack={() => navigation.navigate('HomeScreen')} />
  </Background>
);

export default memo(Dashboard);
