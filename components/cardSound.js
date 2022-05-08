import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const cardSound = ({icon,text}) => {
  return (
    <View>
      <View style={styles.topCard}>
            {icon}
      </View>
      <View style={styles.bottomCard}>
            <Text style={styles.textBottomCard}>{text}</Text>
      </View>
    </View>
  )
}

export default cardSound

const styles = StyleSheet.create({
    topCard:{
        width:100,
        height:93,
        backgroundColor:'#21283F',
        borderTopLeftRadius:16,
        borderTopRightRadius:16,
        alignItems: 'center',
        justifyContent: 'center',
    },
    bottomCard:{
      width:100,
      height:32,
      backgroundColor:'#2D344B',
      borderBottomLeftRadius:16,
      borderBottomRightRadius:16,
      alignItems: 'center',
      justifyContent: 'center',
    },
    textBottomCard:{
        fontStyle: 'normal',
        fontWeight: '500',
        fontSize: 10,
        lineHeight: 12,
        color:'#fff'
    }
})