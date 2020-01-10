import * as React from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';
import * as Permissions from 'expo-permissions';
import { BarCodeScanner } from 'expo-barcode-scanner';

///
import * as FileSystem from 'expo-file-system';
import { Asset } from 'expo-asset';
import * as SQLite from 'expo-sqlite';

/*FileSystem.downloadAsync(
  Asset.fromModule(require('../assets/db/treevydb/')).uri,
  `${FileSystem.documentDirectory}SQLite/treevy.db/`
);*/

const db = SQLite.openDatabase(`db.db`);
///
const LoginScreen = ({ navigation }) => {
}


export default class BarcodeScanner extends React.Component {
  state = {
    hasCameraPermission: null,
    scanned: true,
  };

  async componentDidMount() {
    this.getPermissionsAsync();
  }

  getPermissionsAsync = async () => {
    const { status } = await Permissions.askAsync(Permissions.CAMERA);
    this.setState({ hasCameraPermission: status === 'granted' });
  };

  render() {
    const { hasCameraPermission, scanned } = this.state;

    if (hasCameraPermission === null) {
      return <Text>Requesting for camera permission</Text>;
    }
    if (hasCameraPermission === false) {
      return <Text>No access to camera</Text>;
    }
    return (
      <View
        style={{
          flex: 1,
          flexDirection: 'column',
          justifyContent: 'flex-end',
        }}>
        <BarCodeScanner
          onBarCodeScanned={scanned ? undefined : this.handleBarCodeScanned}  // when scanned function wird aufgerufen
          barCodeTypes={[BarCodeScanner.Constants.BarCodeType.qr]}
          style={StyleSheet.absoluteFillObject}
        />

        {scanned && (
          <Button title={'Tap to Scan'} onPress={() => this.setState({ scanned: false })} />
        )}
      </View>
    );
  }

///

//function isInDB (){}


///


  handleBarCodeScanned = ({ type, data }) => { //What happends when Barcode got scanned?
  console.log("scanned Barcode")
    this.setState({ scanned: true });
    
  
  QR = data;
  QR => db.transaction(
    tx => {
      tx.executeSql(`select from Treelog where QR = ?;`, [QR]);
    }, null, this.update)
  ///


    alert(`Bar code with type ${type} and data ${data} has been scanned!`);
  console.log(data);
  };
}



BarcodeScanner.navigationOptions = {
  header: null,
};
