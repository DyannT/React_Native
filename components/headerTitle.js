import { StyleSheet, Text, View, } from 'react-native'


import React from 'react'
import { Dimensions } from 'react-native-web'

const headerTitle = ({text}) => {
  return (
    <View style={styles.headerView}>
        <View style={{marginLeft:16,marginTop:88}}>
            <Text style={styles.headerText}>{text}</Text>
        </View>
        <View>
          
        </View>
    </View>
  )
}

export default headerTitle


const styles = StyleSheet.create({
    headerView:{
      width:Dimensions.get("window").width-1,
      height:140,
    },
  headerText:{
      color:'#fff',
      fontStyle: 'normal',
      fontWeight: '700',
      fontSize: 34,
      lineHeight: 41,
  }
})