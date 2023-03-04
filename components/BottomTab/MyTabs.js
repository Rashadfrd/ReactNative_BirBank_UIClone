import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeStack from '../../stacks/HomeStack'
import MarketPlaceStack from '../../stacks/MarketPlaceStack';
import Entypo from 'react-native-vector-icons/Entypo';
import SettingsStack from '../../stacks/SettingsStack';

const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator 
        screenOptions={({ route }) => ({
        headerShown:false,
        tabBarIcon: ({ color, size }) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = 'home'
          } else if (route.name === 'MarketPlace') {
            iconName = 'shopping-basket'
          } else if (route.name === 'Settings') {
            iconName = 'dots-three-horizontal'
          }

          return <Entypo name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: '#D82148',
        tabBarInactiveTintColor: 'gray',
      })}
    >
      <Tab.Screen name="Home" options={{title:'Home'}} component={HomeStack} />
      <Tab.Screen name="MarketPlace" options={{title:'MarketPlace'}} component={MarketPlaceStack} />
      <Tab.Screen name="Settings" options={{title:'More'}} component={SettingsStack} />
    </Tab.Navigator>
  );
}

export default MyTabs