import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import { BarCodeScanner } from 'expo-barcode-scanner';

export default function QrScannerScreen() {
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);

  useEffect(() => {
    const getBarCodeScannerPermissions = async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    };

    getBarCodeScannerPermissions();
  }, []);

  const handleBarCodeScanned = ({ type, data }) => {
    setScanned(true);
    alert(`Bar code with type ${type} and data ${data} has been scanned!`);
  };

  if (hasPermission === null) {
    return <Text>Requesting for camera permission</Text>;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  return (
    <View style={styles.container}>
      <BarCodeScanner
        onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
        style={styles.barcodeScanner} />
      {scanned &&
      <View style={styles.scanAgainView}>
        <TouchableOpacity style={styles.scanAgain} onPress={() => setScanned(false)}>
          <Text style={{color:'white'}}>Tap to scan again</Text>
        </TouchableOpacity>
      </View>
      }
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    position:'relative'
  },
  barcodeScanner:{
    width:'100%',
    height:'100%'
  },
  scanAgainView:{
    position:'absolute',
    top:0,
    width:'100%',
    height:'100%',
    backgroundColor:'rgba(0, 0, 0, 0.8)',
    justifyContent:'center',
    alignItems:'center'
  },
  scanAgain:{
    borderWidth:1,
    borderColor:'#ccc',
    padding:15,
    borderRadius:8,
    backgroundColor:'rgba(0, 0, 0, 0.3)',
    textAlign:'center'
  }
});
