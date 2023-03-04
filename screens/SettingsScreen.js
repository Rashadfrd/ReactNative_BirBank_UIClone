import React from 'react'
import { Text, View, StyleSheet, TouchableOpacity, ScrollView} from 'react-native'
import { MaterialIcons, Entypo } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { finances, operations } from '../utils/constants';
import DataList from '../components/Settings/DataLists/DataList';

 const SettingsScreen = () => {
  const navigation = useNavigation()
    return (
      <ScrollView style={styles.wrapper}>
        <Text style={{fontSize:30, fontWeight:'bold'}}> More </Text>
        <TouchableOpacity style={styles.financeItem} activeOpacity={.4} onPress={()=>{navigation.navigate('Home')}}>
            <View style={styles.icon}><MaterialIcons name="home" size={24} color="#D82148" /></View>
        < View style={styles.text}>
            <Text>Home</Text>
            <Entypo name="chevron-small-right" size={24} color="#696969" />
          </View>
        </TouchableOpacity>
        <DataList data={finances} title='My Finances' />
        <DataList data={operations} title='Operations' />
      </ScrollView>
    )
  }

  const styles = StyleSheet.create({
    wrapper:{
      paddingTop:60,
      paddingHorizontal:10,
      backgroundColor:'white',
    },
    financeItem:{
      flexDirection:'row',
      justifyContent:'space-between',
      margin:5,
      marginTop:10
    },
    icon:{
      width:50,
      height:55,
      backgroundColor:'#f2f2f2',
      justifyContent:'center',
      alignItems:'center',
      marginRight:10,
      borderRadius:10
    },
    text:{
      flex:1,
      flexDirection:'row',
      justifyContent:'space-between',
      alignItems:'center',
      borderBottomWidth:1,
      borderBottomColor:'#f2f2f2'
    }
  })

export default SettingsScreen
