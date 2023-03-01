import React, { useLayoutEffect } from 'react'
import { StyleSheet,View,StatusBar, } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import HomeHeader from '../components/HomeHeader'


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
