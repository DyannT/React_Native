import { StyleSheet, Text, View,Dimensions } from 'react-native'
import React from 'react'

const titleCardSound = ({textHeader,textBottom}) => {
  return (
    <View style={styles.container}>
        <View>
            <Text style={styles.textHeader}>{textHeader}</Text>
        </View>

        <View>
            <Text style={styles.textBottom}>{textBottom}</Text>
        </View>
    </View>
  )
}

export default titleCardSound

const styles = StyleSheet.create({
    container: {
        marginLeft:16
    },
    textHeader:{
        fontSize: 17,
        lineHeight: 22,
        color: '#fff'
    },
    textBottom:{
        fontSize: 12,
        lineHeight: 16,
        color: 'rgba(235, 235, 245, 0.6)'
    }
})