import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SettingsScreen from '../screens/SettingsScreen';
import { Header } from 'react-native/Libraries/NewAppScreen';



const Stack = createNativeStackNavigator()

const SettingsStack = () => {  
    return (
      <Stack.Navigator initialRoutName="SettingsScreen">
         <Stack.Screen name="SettingsScreen" component={SettingsScreen} />
      </Stack.Navigator>
    )
}
export default SettingsStack