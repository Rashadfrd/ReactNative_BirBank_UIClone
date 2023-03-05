import React from 'react'
import {ScrollView, StyleSheet } from 'react-native'
import MarketPlaceHeader from '../components/MarketPlace/MarketPlaceHeader'
import MarketPlaceHero from '../components/MarketPlace/MarketPlaceHero'
import DataList from '../components/Settings/DataLists/DataList'
import { marketplace } from '../utils/constants'

 const MarketPlaceScreen = () => {
    return (
      <ScrollView style={styles.wrapper} stickyHeaderIndices={[0]}>
        <MarketPlaceHeader />
        <MarketPlaceHero />
        <DataList data={marketplace} />
      </ScrollView>
    )
  }

  const styles = StyleSheet.create({
    wrapper:{
      paddingTop:60,
      paddingHorizontal:15
    }
  })

export default MarketPlaceScreen
