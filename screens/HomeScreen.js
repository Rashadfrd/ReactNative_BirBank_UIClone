import React, { useLayoutEffect } from 'react'
import { StyleSheet,View,StatusBar, } from 'react-native'
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
            <View style={styles.home}>
                <HomeHeader />
                <HomeInfoCard />
                <HomeQuickActions />
                <HomeMyProducts />
            </View>
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
