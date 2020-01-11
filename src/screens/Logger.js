import React from 'react';

import { CellVariant, Cell, Section, TableView } from 'react-native-tableview-simple';
import {
  ActivityIndicator,
  Dimensions,
  Image,
  ScrollView,
  StyleSheet,
  Switch,
  Text,
  TextInput,
  View,
  Alert,
  Button
} from 'react-native';
import Background from '../components/Background';
import Logo from '../components/Logo';

export default function Logger() {

  let state = {
    table: [
      {
        qrCode: 'Tree1Log1, Tree1Log2, TreeLog3',
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
        qrCode: 'Tree3Log1, TreeLog2',
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
      `${data.treeNumber}`,
       data.qrCode ,
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

    <ScrollView style={styles.container} >
      <View style={{
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-between' }}>
        <Logo/>

        <TableView>
          <Section>
            {
              state.table.map((data, index) =>
                <Cell key={index} title={data.treeNumber} style={{ flex: 1, fontSize: 12 }}
                  onPress={() => this.showAlert(data)} />
              )
            }
          </Section>
        </TableView>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
  },
});