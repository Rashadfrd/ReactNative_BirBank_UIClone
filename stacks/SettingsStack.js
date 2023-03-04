import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SettingsScreen from '../screens/SettingsScreen';



const Stack = createNativeStackNavigator()

const SettingsStack = () => {  
    return (
      <Stack.Navigator initialRoutName="SettingsScreen" screenOptions={{headerShown: false}}>
         <Stack.Screen name="SettingsScreen" component={SettingsScreen} />
      </Stack.Navigator>
    )
}
export default SettingsStack