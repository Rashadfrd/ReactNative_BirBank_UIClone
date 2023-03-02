import React from 'react'
import { Text, View, StyleSheet, Image, TouchableOpacity } from 'react-native'
import { Entypo } from '@expo/vector-icons';

const HomeMyProducts = () => {
    return (
      <View style={styles.myProducts}>
        <View style={styles.titleAndBtn}>
            <Text style={styles.title}> My Products</Text>
            <View style={styles.allBtn}>
                <Text><Entypo name="back-in-time" size={18} color="#D82148" /></Text>
                <Text style={{color:'#696969', marginLeft:10,fontSize:13}}>Recent Activity</Text>
            </View>
        </View>
        <View style={styles.cardsWrapper}>
            <Text style={{color:'#696969'}}>Cards/Accounts</Text>
            <View style={styles.cards}>
                <TouchableOpacity activeOpacity={.8} style={styles.cardItem}>
                    <View style={styles.cardLogoWrapper}>
                        <Image style={styles.cardLogo} source={require('../../assets/azn.png')} />
                    </View>
                        <View style={styles.cardInfos}>
                            <Text style={{fontSize:13, color:'#696969'}}>Card Account</Text>
                            <Text>0.00 <Text>AZN</Text></Text>
                        </View>
                </TouchableOpacity>
                <TouchableOpacity activeOpacity={.8} style={styles.cardItem}>
                    <View style={styles.cardLogoWrapper}>
                        <Image style={styles.cardLogo} source={require('../../assets/azn.png')} />
                    </View>
                    <View style={styles.cardInfos}>
                        <Text style={{fontSize:13, color:'#696969'}}>Card Account</Text>
                        <Text>0.00 <Text>AZN</Text></Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity activeOpacity={.8} style={styles.cardItem}>
                    <View style={styles.cardLogoWrapper}>
                        <Image style={styles.cardLogo} source={require('../../assets/azn.png')} />
                    </View>
                    <View style={styles.cardInfos}>
                        <Text style={{fontSize:13, color:'#696969'}}>Card Account</Text>
                        <Text>0.00 <Text>AZN</Text></Text>
                    </View>
                </TouchableOpacity>
            </View>
        </View>
      </View>
    )
  }
  
  const styles = StyleSheet.create({
    myProducts:{
        marginTop:40,
        paddingVertical:15
    },
    cardsWrapper:{
        paddingVertical:15,
        paddingHorizontal:5
    },
    cardInfos:{
        marginLeft:10
    },
    cardItem:{
        height:63,
        marginVertical:7,
        backgroundColor:'white',
        borderRadius:12,
        flexDirection:'row',
        shadowColor: "#696969",
        alignItems:'center',
        paddingHorizontal:10,
        shadowOffset: {
          width: 0,
          height: 1,
        },
        shadowOpacity:  0.16,
        shadowRadius: 1.51,
        elevation: 2
    },
    cardLogoWrapper:{
        width:50,
        height:50,
        backgroundColor:'#f5f5f5',
        alignItems:'center',
        justifyContent:'center',
        borderRadius:50
    },
    cardLogo:{
        width:40,
        height:40
    },
    titleAndBtn:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between'
    },
    title:{
        fontSize:22
    },
    allBtn:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
        backgroundColor:'white',
        paddingHorizontal:10,
        paddingVertical:5,
        borderRadius:30,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,
    }
  })

export default HomeMyProducts
