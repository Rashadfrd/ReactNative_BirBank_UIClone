import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MarketPlaceScreen from '../screens/MarketPlaceScreen';



const Stack = createNativeStackNavigator()

const MarketPlaceStack = () => {  
    return (
      <Stack.Navigator initialRoutName="MarketPlaceScreen" screenOptions={{headerShown: false}}>
         <Stack.Screen name="MarketPlaceScreen" component={MarketPlaceScreen} />
      </Stack.Navigator>
    )
}
export default MarketPlaceStack