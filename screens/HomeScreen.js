import React, { useLayoutEffect } from 'react'
import { StyleSheet,View,StatusBar, } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import HomeHeader from '../components/HomeHeader'
import HomeInfoCard from '../components/HomeInfoCard'


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
