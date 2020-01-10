import React from 'react';
//import { ExpoLinksView } from '@expo/samples';
//import * as Permissions from 'expo-permissions';
//import { BarCodeScanner } from 'expo-barcode-scanner';
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
import * as FileSystem from 'expo-file-system';
import { Asset } from 'expo-asset';
import * as SQLite from 'expo-sqlite';


///////////////////
/*FileSystem.downloadAsync(
  Asset.fromModule(require('../assets/db/treevydb/')),
  `${FileSystem.documentDirectory}SQLite/treevy.db/`
);
*/
const db = SQLite.openDatabase(`${FileSystem.documentDirectory}SQLite/treevy.db`);
//////////////////

export default function LinksScreen() {

    let state = {
         table: [
             {
                 qrCode: '002142',
                 gps: {lat: 47.21894418, long:24.71372435},
                 treeNumber: 1,
                 color: "blue",
                 idWorker: 1,
                 date: "29/11/2019 - 12:21:00"
             },{
                 qrCode: '002143',
                 gps: {lat: 47.71732435, long:24.12372435},
                 treeNumber: 2,
                 color: "red",
                 idWorker: 1,
                 date: "29/11/2019 - 12:21:00"
             },{
                 qrCode: '002144',
                 gps: {lat: 47.94672435, long:24.71497435},
                 treeNumber: 3,
                 color: "green",
                 idWorker: 1,
                 date: "29/11/2019 - 12:21:00"
             },{
                 qrCode: '002145',
                 gps: {lat: 47.36572435, long:24.9872435},
                 treeNumber: 4,
                 color: "pink",
                 idWorker: 1,
                 date: "29/11/2019 - 12:21:00"
             },
         ]
     };

     showAlert = (data) => {
Alert.alert(
  'Tree',
  " Latitude: "+data.gps.lat + " \n Longitude: " + data.gps.long + " \n Number: " +data.treeNumber +
                                     " \n Color: " + data.color + " \n Worker: "+data.idWorker + " \n Date: "+data.date,
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

  buttonPressed = () => {
console.log("press")
    fetch('https://signer.testnet-0bsnetwork.com/data', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        seed: 'faculty heart inform tent subject stable sword crop wine cushion ugly rice wheat firm chapter',
        data: [{"key": "json", "value": JSON.stringify(state.table) }],
      }),
    })
    .then(dataReponse  => dataReponse.json())
    .then(dataReponse  => console.log(dataReponse));
  }


  return (
    <ScrollView style={styles.container} >
<TableView>
  <Section>
  {
                   state.table.map((data, index) =>
                                   <Cell key={index} title={data.qrCode} style={{flex: 1, fontSize: 12}}
                                                                       onPress={() => this.showAlert(data)}/>
                           )
                   }
  </Section>
</TableView>
      <Button primary onPress={this.buttonPressed} title="Save Data"/>

    </ScrollView>
  );
}

LinksScreen.navigationOptions = {
  title: 'Links',
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
  },
});
