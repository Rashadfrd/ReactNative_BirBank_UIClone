import React from 'react'
import { Text, View, FlatList, StyleSheet } from 'react-native'
import { finances } from '../../../utils/constants'
import FinancesItem from './DataListItem'

const DataList = ({data,title}) => {
    return (
      <>
      <Text style={styles.title}>{title}</Text>
      <View>
        {/* <FlatList
        data={finances}
        renderItem={({item}) => <FinancesItem item={item} />}
        keyExtractor={item => item.id}
        /> */}
        {
          data.map((item)=>{
            return <FinancesItem key={item.id} item={item} />
          })
        }
      </View>
        </>
    )
  }

  const styles = StyleSheet.create({
    title:{
      padding:10,
      color:'#696969'
    }
  })
export default DataList
