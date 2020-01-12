import * as React from 'react';
import { Text, View, StyleSheet, Alert, Button } from 'react-native';
import * as Permissions from 'expo-permissions';
import { BarCodeScanner } from 'expo-barcode-scanner';
import BackButton from '../components/BackButton';



export default class BarcodeScanner extends React.Component {
  state = {
    hasCameraPermission: null,
    scanning: true,
  };
  async componentDidMount() {
    this.getPermissionsAsync();
  }

  getPermissionsAsync = async () => {
    const { status } = await Permissions.askAsync(Permissions.CAMERA);
    this.setState({ hasCameraPermission: status === 'granted' });
  };

  render() {
    const { hasCameraPermission, scanning } = this.state;
    const { navigate } = this.props.navigation;
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
          onBarCodeScanned={scanning ? undefined : this.handleBarCodeScanned}  // when scanned function wird aufgerufen
          barCodeTypes={[BarCodeScanner.Constants.BarCodeType.qr]}
          style={StyleSheet.absoluteFillObject}
        />
        
        {scanning && (<Button title={'Tap to Scan'} onPress={() => this.setState({ scanning: false })} />)}
        <BackButton goBack={() => this.props.navigation.navigate('HomeScreen')} />
      </View>
    );
  }
  
  handleBarCodeScanned = ({ type, data }) => { //What happends when Barcode got scanned?
    console.log("scanned Barcode")
    this.setState({ scanning: true });
    Alert.alert(`Barcode scanned!`, `${data}`);
    console.log(data);
  };
}


BarcodeScanner.navigationOptions = {
  header: null,
};
