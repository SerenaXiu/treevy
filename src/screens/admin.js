import React, { memo } from 'react';
import Background from '../components/Background';
import BackButton from '../components/BackButton';
import BlockChainz from '../components/BlockChainz';
import Logo from '../components/Logo';

const admin = ({ navigation }) => (
  <Background>
    <BlockChainz />
    <BackButton goBack={() => {navigation.navigate('HomeScreen') }} />
    <Logo />
  </Background>
);



export default memo(admin);
