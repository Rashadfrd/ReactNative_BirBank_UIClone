import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import QrScannerScreen from '../screens/QrScannerScreen';


const Stack = createNativeStackNavigator()

const QRScannerStack = () => {  
    return (
      <Stack.Navigator initialRoutName="QrScannerScreen" screenOptions={{headerShown: false}}>
         <Stack.Screen name="QrScannerScreen" component={QrScannerScreen} />
      </Stack.Navigator>
    )
}
export default QRScannerStack