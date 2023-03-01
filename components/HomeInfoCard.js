import React from 'react'
import { Text, View, ScrollView, StyleSheet, Image } from 'react-native'
import { MaterialIcons } from '@expo/vector-icons';

const HomeInfoCard = () => {
    return (
        <View>
            <ScrollView showsHorizontalScrollIndicator={false} horizontal={true} style={styles.prods}>
                <View style={styles.prodItem}>
                    <Image
                    style={styles.image}
                    source={{uri:'https://pbs.twimg.com/media/Etdjdn1WYAUAukN.jpg'}} />
                    <Text style={styles.infoCardText}>InfoCard info</Text>
                </View>
                <View style={styles.prodItem}>
                    <Image
                    style={styles.image}
                    source={{uri:'https://www.kapitalbank.az/images/news/F/birkartlatehsilhaqqi1630483001.jpg'}} />
                    <Text style={styles.infoCardText}>InfoCard info</Text>
                </View>
                <View style={styles.prodItem}>
                    <Image
                    style={styles.image}
                    source={{uri:'https://www.kapitalbank.az/images/news/F/ozbirkartin1613021805.jpg'}} />
                    <Text style={styles.infoCardText}>InfoCard info</Text>
                </View>
            </ScrollView>
        </View>
    )
  }

  const styles = StyleSheet.create({
    prods:{
        marginTop:10
    },
    image:{
        width:150,
        height:100,
        borderRadius:8,
    },
    prodItem:{
        borderRadius:8,
        margin:5,
        position:'relative'
    },
    infoCardText:{
        position:'absolute',
        bottom:5,
        left:5,
        fontSize:12,
        color:'#fff'
    }
})

export default HomeInfoCard
