import React from 'react'
import { Text,View, TouchableOpacity, ScrollView, StyleSheet, Image } from 'react-native'
import { useNavigation } from '@react-navigation/native'

const HomeInfoCard = () => {
    const navigation = useNavigation()
    return (
        <View>
            <ScrollView showsHorizontalScrollIndicator={false} horizontal={true} style={styles.prods}>
                <TouchableOpacity style={styles.prodItem} onPress={()=>{navigation.navigate('Settings')}}>
                    <Image
                    style={styles.image}
                    source={{uri:'https://pbs.twimg.com/media/Etdjdn1WYAUAukN.jpg'}} />
                    <Text style={styles.infoCardText}>InfoCard info</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.prodItem}>
                    <Image
                    style={styles.image}
                    source={{uri:'https://www.kapitalbank.az/images/news/F/birkartlatehsilhaqqi1630483001.jpg'}} />
                    <Text style={styles.infoCardText}>InfoCard info</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.prodItem}>
                    <Image
                    style={styles.image}
                    source={{uri:'https://www.kapitalbank.az/images/news/F/ozbirkartin1613021805.jpg'}} />
                    <Text style={styles.infoCardText}>InfoCard info</Text>
                </TouchableOpacity>
            </ScrollView>
        </View>
    )
  }

  const styles = StyleSheet.create({
    prods:{
        marginTop:10
    },
    image:{
        width:140,
        height:78,
        borderRadius:11,
    },
    prodItem:{
        borderRadius:15,
        margin:4,
        position:'relative',
        padding:2,
        borderWidth:2.5,
        borderColor:'red'
    },
    infoCardText:{
        position:'absolute',
        bottom:5,
        left:5,
        fontSize:11,
        color:'#fff'
    }
})

export default HomeInfoCard
