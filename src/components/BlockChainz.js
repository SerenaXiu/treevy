import React from 'react';
import { Cell, Section, TableView } from 'react-native-tableview-simple';
import {
  ScrollView,
  StyleSheet,
  Alert,
  Button
} from 'react-native';


export default function Logger() {

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
      },
      {
        qrCode: 'Tree1Log2',
        gps: { lat: 47.21894418, long: 24.71372435 },
        height: 100,
        diameter: 0.8,
        treeNumber: 1,
        idWorker: 1,
        date: "29/11/2019 - 12:21:00"
      },
      {
        qrCode: 'Tree1Log3',
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
      `${data.qrCode}`,
      " Latitude: " + data.gps.lat + " \n Longitude: " + data.gps.long + "\n Height: " + data.height + "\n Diameter: "
      + data.diameter + " \n\n TreeNumber: " + data.treeNumber + "\n Worker_id: " + data.idWorker + " \n Date: " + data.date,
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
        data: [{ "key": "json", "value": JSON.stringify(state.table) }],
      }),
    })
      .then(dataReponse => dataReponse.json())
      .then(dataReponse => console.log(dataReponse));

    alert("SUCESS", "Data got sent to Blockchain!")
    console.log(qrCode1);
  }



  return (

    <ScrollView style={styles.container} >


      <TableView>
        <Section>
          {
            state.table.map((data, index) =>
              <Cell key={index} title={data.qrCode} style={{ flex: 1, fontSize: 12 }}
                onPress={() => this.showAlert(data)} />
            )
          }
        </Section>
      </TableView>

      <Button primary onPress={this.buttonPressed} title="Save Data" />
    </ScrollView>

  );
}



const styles = StyleSheet.create({
  container: {
    flex: 15,
    height: 60,
    width: 330,
    marginTop: 40,
    marginBottom: 50,
    backgroundColor: 'transparent',
  },
})