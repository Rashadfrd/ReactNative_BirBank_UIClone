import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeStack from '../../stacks/HomeStack'
import MarketPlaceStack from '../../stacks/MarketPlaceStack';

const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator screenOptions={{headerShown: false}}>
      <Tab.Screen name="Home" component={HomeStack} />
      <Tab.Screen name="MarketPlace" component={MarketPlaceStack} />
    </Tab.Navigator>
  );
}

export default MyTabs