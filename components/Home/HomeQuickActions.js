import React from 'react'
import { Text, View, StyleSheet, TouchableOpacity, Image } from 'react-native'
import { Entypo, MaterialIcons,AntDesign  } from '@expo/vector-icons'; 

const HomeQuickActions = () => {
    return (
      <View style={styles.wrapper}>
        <View style={styles.titleAndBtn}>
            <Text style={styles.title}> Quick actions</Text>
            <TouchableOpacity style={styles.allBtn}>
                <Text style={{color:'#696969'}}>See all</Text>
                <Text> <Entypo name="chevron-small-right" size={24} color="#696969" /></Text>
            </TouchableOpacity>
        </View>
        <View style={styles.actions}>
            <View style={styles.actionsItem}>
                <TouchableOpacity style={styles.itemLogo}>
                    <MaterialIcons name="payments" size={33} color="#D82148" />
                </TouchableOpacity>
                <Text style={{fontSize:11}}>Easy Transfer</Text>
            </View>
            <View style={{borderRightWidth:1,marginRight:10,borderRightColor: '#ccc', width:1,height:'50%'}}/>
            <View style={styles.actionsItem}>
                <TouchableOpacity style={styles.itemLogo}>
                    <Image style={styles.actionsItemLogo} source={{uri:'https://seeklogo.com/images/N/nar-mobile-logo-385DC18A08-seeklogo.com.png'}} />
                </TouchableOpacity>
                <Text style={{fontSize:11}}>Ödəniş</Text>
            </View>
            <View style={styles.actionsItem}>
            <TouchableOpacity style={styles.itemLogo}>
                    <Image style={styles.actionsItemLogo} source={{uri:'https://seeklogo.com/images/N/nar-mobile-logo-385DC18A08-seeklogo.com.png'}} />
                </TouchableOpacity>
                <Text style={{fontSize:11}}>Ödəniş</Text>
            </View>
            <View style={styles.actionsItem}>
                <TouchableOpacity style={styles.itemLogo}>
                    <AntDesign name="plus" size={33} color="black" />
                </TouchableOpacity>
                <Text style={{fontSize:11}}>Create template</Text>
            </View>
        </View>
      </View>
    )
  }

  const styles = StyleSheet.create({
    wrapper:{
        marginTop:15
    },
    actions:{
        marginTop:15,
        flexDirection:'row',
        alignItems:'center'
    },
    actionsItem:{
        marginRight:10,
        width:80,
        height:80,
        alignItems:'center'
    },
    itemLogo:{
        width:80,
        height:80,
        marginBottom:7,
        borderRadius:20,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'white',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.22,
        shadowRadius: 2.22,

        elevation: 3,
    },
    actionsItemLogo:{
     width:37,
     height:37,
     resizeMode:'contain'   
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
    }
  })

export default HomeQuickActions
