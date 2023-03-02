import React from 'react'
import { Image, TouchableOpacity,StyleSheet,View,TextInput } from 'react-native'
import { Ionicons,Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const HomeHeader = () => {
    const navigation = useNavigation()
    return (
        <View style={styles.header}>
             <View style={styles.headerNav}>
                <View style={styles.headerLeft}>
                    <TouchableOpacity>
                        <Image style={styles.birbankImg} source={{uri:'https://www.kapitalbank.az/assets/static/img/menu/bblogo.png'}} />
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Ionicons name="eye-outline" size={30} color="red" />
                    </TouchableOpacity>
                </View>
                <View>
                    <Image style={styles.kapitalImg} source={{uri:'https://www.kapitalbank.az/files/about/main/Kapital_Bank_Logo.png'}} />
                </View>
                <View style={styles.headerRight}>
                    <TouchableOpacity>
                        <Ionicons style={{marginRight:15}} name="chatbubble-outline" size={26} color="black" />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={()=>{navigation.navigate('SettingsScreen')}}>
                        <Feather name="bell" size={26} color="black" />
                    </TouchableOpacity>
                </View>
            </View>
            <View style={styles.inputAndAdjustment}>
            <View style={styles.input}>
                <Ionicons name="search-outline" size={24} color="black" />
                <TextInput style={styles.inputItem} keyboardType='default' placeholder='Search'/>
            </View>
      </View>
        </View>
    )
  }


  const styles = StyleSheet.create({
    headerNav:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between'
    },
    headerLeft:{
        width:100,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'flex-start'
    },
    headerRight:{
        width:100,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'flex-end'
    },
    birbankImg:{
        width:40,
        height:40,
        marginRight:12
    },
    kapitalImg:{
        width:137,
        height:50,
        resizeMode:'contain'
    },
    inputAndAdjustment:{
        flexDirection:'row',
        justifyContent:'space-between',
        marginTop:20,
        paddingLeft:3,
        alignItems:'center',
        width:'100%'
    },
    input:{
        backgroundColor:'white',
        flexDirection:'row',
        alignItems:'center',
        padding:7,
        width:'100%',
        borderRadius:5
    },
    inputItem:{
      paddingLeft:10,
        width:'100%'
    }
  })

export default HomeHeader
