import React from 'react'
import { Text, View, StyleSheet, Image, TouchableOpacity } from 'react-native'

const MarketPlaceHero = () => {
    return (
      <TouchableOpacity style={styles.hero} activeOpacity={.5}>
        <Image style={styles.heroImg} source={{uri:'https://www.kapitalbank.az/images/news/D/birbank-lotereya-qalibler1674799970.png'}} />
      </TouchableOpacity>
    )
  }
  
  const styles = StyleSheet.create({
    heroImg:{
        width:'100%',
        height:150,
        resizeMode:'contain',
        borderRadius:20,
        marginTop:10
    }
  })

export default MarketPlaceHero
