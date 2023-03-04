import React, { useLayoutEffect } from 'react'
import { StyleSheet,View,StatusBar, ScrollView, } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import HomeHeader from '../components/Home/HomeHeader'
import HomeInfoCard from '../components/Home/HomeInfoCard'
import HomeQuickActions from '../components/Home/HomeQuickActions'
import HomeMyProducts from '../components/Home/HomeMyProducts'


const HomeScreen = () => {

    const navigation = useNavigation()
    useLayoutEffect(()=>{
        navigation.setOptions({
            headerShown:false
        })
    },[]
    
    )
    return (
        <>
            <StatusBar />
            <ScrollView style={styles.home} stickyHeaderIndices={[0]}>
                <HomeHeader />
                <HomeInfoCard />
                <HomeQuickActions />
                <HomeMyProducts />
            </ScrollView>
        </>
    )
  }

  const styles = StyleSheet.create({
    home:{
        padding:10,
        paddingLeft:15,
        paddingRight:15
    }
  })

export default HomeScreen
