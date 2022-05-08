import { StyleSheet, Text, View,TouchableOpacity,Alert,Dimensions } from 'react-native'
import React from 'react'


const ButtonCustom = ({text,onPress}) => {
  return (
    <View>
        <TouchableOpacity style={styles.button} onPress = {onPress}>
            <Text style={styles.text}>{text}</Text>
        </TouchableOpacity>
    </View>

  )
}

export default ButtonCustom

const styles = StyleSheet.create({
    button:{
        height:50,
        backgroundColor:'#21283F',
        alignItems: 'center',
        justifyContent: 'center',
        width: Dimensions.get("window").width-64,
        borderRadius: 100
    },
    text:{
        color:'#fff',
    },
})