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


export default function LinksScreen() {

        let state = {
             table: [
                 {
                      qrCode: 'Tree1Log1',
                      gps: { lat: 47.21894418, long: 24.71372435 },
                      height: 100,
                      diameter: 0.8,
                      treeNumber: 1,
                      idWorker: 1,
                      date: "29/11/2019 - 12:21:00"
                 },{
                       qrCode: 'Tree1Log2',
                       gps: { lat: 47.21894418, long: 24.71372435 },
                       height: 100,
                       diameter: 0.8,
                       treeNumber: 1,
                       idWorker: 1,
                       date: "29/11/2019 - 12:21:00"
                 },{
                         qrCode: 'Tree1Log3',
                         gps: { lat: 47.21894418, long: 24.71372435 },
                         height: 100,
                         diameter: 0.8,
                         treeNumber: 1,
                         idWorker: 1,
                         date: "29/11/2019 - 12:21:00"
                 },{
                        qrCode: 'Tree2Log1',
                        gps: { lat: 47.71732435, long: 24.12372435 },
                        height: 30,
                        diameter: 0.6,
                        treeNumber: 2,
                        idWorker: 1,
                        date: "29/11/2019 - 12:21:00"
                 },
                 {
                         qrCode: 'Tree3Log1',
                         gps: { lat: 47.94672435, long: 24.71497435 },
                         height: 80,
                         diameter: 0.9,
                         treeNumber: 3,
                         idWorker: 1,
                         date: "29/11/2019 - 12:21:00"
                       },
                       {
                         qrCode: 'Tree3Log2',
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
      'Tree',
     `${data.qrCode}`,
           " Latitude: " + data.gps.lat + " \n Longitude: " + data.gps.long + " \n TreeNumber: " + data.treeNumber +
           " \n Date: " + data.date,
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
    flex: 10,
    height: 40,
    width: 330,
    marginTop: 100,
    marginBottom: 100,
    backgroundColor: 'transparent',
  },
});
