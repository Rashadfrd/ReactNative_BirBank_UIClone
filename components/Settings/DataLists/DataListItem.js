import React from 'react'
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native'
import { Entypo } from '@expo/vector-icons';

const DataListItem = ({item}) => {
    return (
      <TouchableOpacity style={styles.financeItem} activeOpacity={.4}>
          <View style={styles.icon}>{item.icon}</View>
        <View style={styles.text}>
          <Text>{item.text}</Text>
          <Entypo name="chevron-small-right" size={24} color="#696969" />
        </View>
      </TouchableOpacity>
    )
  }

  const styles = StyleSheet.create({
    financeItem:{
      flexDirection:'row',
      justifyContent:'space-between',
      margin:5,
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

export default DataListItem
