import React, { memo } from 'react';
import Background from '../components/Background';
import BackButton from '../components/BackButton';
import BlockChainz from '../components/BlockChainz';
import { StyleSheet } from 'react-native';
import Logo from '../components/Logo';

const admin = ({ navigation }) => (
  <Background>
    <Logo />
    <BlockChainz />
    <BackButton goBack={() => navigation.navigate('Dashboard')} />
  </Background>
);

const styles = StyleSheet.create({
  container: {
    flex: 10,
    height: 40,
    width: 330,
    marginTop: 100,
    marginBottom: 100,
    backgroundColor: 'transparent',
  },
})

export default memo(admin);
