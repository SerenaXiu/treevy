import React from 'react';
import { Cell, Section, TableView } from 'react-native-tableview-simple';
import {
  ScrollView,
  StyleSheet,
  Alert,
} from 'react-native';
import Background from '../components/Background';
import Logo from '../components/Logo';
import BackButton from '../components/BackButton';

export default function Logger({navigation}) {

  let state = {
    table: [
      {
        qrCode: 'Tree1Log1 \n Tree1Log2 \n Tree1Log3',
        gps: { lat: 47.21894418, long: 24.71372435 },
        height: 100,
        diameter: 0.8,
        treeNumber: 1,
        idWorker: 1,
        date: "29/11/2019 - 12:21:00"
      },
      {
        qrCode: 'Tree2Log1',
        gps: { lat: 47.71732435, long: 24.12372435 },
        height: 30,
        diameter: 0.6,
        treeNumber: 2,
        idWorker: 1,
        date: "29/11/2019 - 12:21:00"
      },
      {
        qrCode: 'Tree3Log1 \n Tree3Log2',
        gps: { lat: 47.94672435, long: 24.71497435 },
        height: 80,
        diameter: 0.9,
        treeNumber: 3,
        idWorker: 1,
        date: "29/11/2019 - 12:21:00"
      },
      {
        qrCode: 'Tree4Log1',
        gps: { lat: 47.36572435, long: 24.9872435 },
        height: 20,
        diameter: 0.7,
        treeNumber: 4,
        idWorker: 1,
        date: "29/11/2019 - 12:21:00"
      },
    ]
  };

  showAlert = (data) => {
    Alert.alert(
      ` TREE ${data.treeNumber}`,
      ` Logs:\n ${data.qrCode}`,
      [
        {
          text: 'Cancel',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel',
        },
        { text: 'OK', onPress: () => console.log('OK Pressed') },
      ],
      { cancelable: false }
    );
  }



  return (
    <Background>
      <BackButton goBack={() => {navigation.navigate('HomeScreen') }} />
      <ScrollView style={styles.container} >
        <TableView>
          <Section>
            {
              state.table.map((data, index) =>
                <Cell key={index} title={`TREE ${data.treeNumber}`} style={{ flex: 1, fontSize: 12 }}
                  onPress={() => this.showAlert(data)} />
              )
            }
          </Section>
        </TableView>
      </ScrollView>

      <Logo />

    </Background>

  );

}

const styles = StyleSheet.create({
  container: {
    flex: 15,
    height: 60,
    width: 330,
    marginTop: 70,
    marginBottom: 50,
    backgroundColor: 'transparent',
  },
})