import React from 'react'
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native'
import { AntDesign, Feather } from '@expo/vector-icons';

const MarketPlaceHeader = () => {
    return (
      <View style={styles.wrapperHeader}>
        <View style={styles.header}>
            <Text style={styles.title}>Umico Market</Text>
            <View style={styles.icons}>
                <TouchableOpacity>
                    <AntDesign name="search1" size={25} color="#D82148" />
                </TouchableOpacity>
                <TouchableOpacity>
                    <AntDesign name="shoppingcart" size={25} color="#D82148" />
                </TouchableOpacity>
                <TouchableOpacity>
                    <Feather name="shopping-bag" size={25} color="#D82148" />
                </TouchableOpacity>
            </View>
        </View>
      </View>
    )
  }


  const styles = StyleSheet.create({
    wrapperHeader:{
        height:100,
        justifyContent:'center',
        backgroundColor:'#f5f5f5'
    },
    title:{
        fontSize:30,
        fontWeight:'bold'
    },
    header:{
        flexDirection:'row',
        justifyContent:'space-between',
        paddingRight:10
    },
    icons:{
        flexDirection:'row',
        alignItems:'center',
        gap:20
    }
  })

export default MarketPlaceHeader
