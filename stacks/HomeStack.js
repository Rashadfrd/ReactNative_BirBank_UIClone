import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen';
import SettingsScreen from '../screens/SettingsScreen';

const Stack = createNativeStackNavigator()

const HomeStack = () => {  
    return (
      <Stack.Navigator initialRoutName="HomeScreen" screenOptions={{headerShown: false}}>
         <Stack.Screen name="HomeScreen" component={HomeScreen} />
      </Stack.Navigator>
    )
}
export default HomeStack