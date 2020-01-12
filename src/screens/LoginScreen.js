import React, { memo, useState } from 'react';
import { TouchableOpacity, StyleSheet, Text, View } from 'react-native';
import Background from '../components/Background';
import Logo from '../components/Logo';
import Button from '../components/Button';
import TextInput from '../components/TextInput';
import BackButton from '../components/BackButton';
import { theme } from '../core/theme';
import { emailValidator, passwordValidator } from '../core/utils';

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState({ value: '', error: '' });
  const [password, setPassword] = useState({ value: '', error: '' });

  const _onLoginPressed = () => {
    const emailError = emailValidator(email.value);
    const passwordError = passwordValidator(password.value);

    if (emailError || passwordError) {
      setEmail({ ...email, error: emailError });
      setPassword({ ...password, error: passwordError });
    }
    
    if (email.value == 'thomas.schneider@wien.at' && password.value == 'treevy' ) { navigation.navigate('Logger')};
    if (email.value == 'greta.schneider@wien.at' && password.value == 'treevy' ) { navigation.navigate('admin')};
    if (email.value == 'wolfgang.beckmann@wien.at' && password.value == 'treevy' ) { navigation.navigate('Logger')};
    if (email.value == 'caroline.weber@wien.at' && password.value == 'treevy' ) { navigation.navigate('Dashboard')};
    
    //navigation.navigate('Dashboard');
  };

  return (
    <Background>
      <BackButton goBack={() => navigation.navigate('HomeScreen')} />

      <Logo />

      <TextInput
        label="Email"
        returnKeyType="next"
        value={email.value}
        onChangeText={text => setEmail({ value: text, error: '' })}
        error={!!email.error}
        errorText={email.error}
        autoCapitalize="none"
        autoCompleteType="email"
        textContentType="emailAddress"
        keyboardType="email-address"
      />

      <TextInput
        label="Password"
        returnKeyType="done"
        value={password.value}
        onChangeText={text => setPassword({ value: text, error: '' })}
        error={!!password.error}
        errorText={password.error}
        secureTextEntry
      />

      

      <Button mode="contained" onPress={_onLoginPressed}>
        Login
      
      </Button>

    </Background>
  );
};



export default memo(LoginScreen);
