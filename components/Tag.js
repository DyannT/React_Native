import { StyleSheet, Text, View,TouchableOpacity } from 'react-native'
import React,{useState} from 'react'

const Tag = ({icon,text}) => {
    const [active,setActive] = useState(true)
  return (
    <View>
        <TouchableOpacity style = {[styles.button,{backgroundColor:active===true ? "#4870FF" : "#21283F",}]} onPress={() => setActive(!active)}>
            {icon}
            <Text style = {styles.text}>{text}</Text>
        </TouchableOpacity>
    </View>
  )
}

export default Tag

const styles = StyleSheet.create({
    button:{
        minWidth:66,
        height:38,
        backgroundColor:'#4870FF',
        borderRadius: 19,
        alignItems: 'center',
        justifyContent: 'center',
        flexWrap: "nowrap",
        flexDirection: "row",
        paddingHorizontal:10
    },
    text:{
        fontStyle: 'normal',
        fontWeight: '600',
        fontSize: 17,
        lineHeight: 22,
        color:"#fff",
        paddingLeft:10
    }
})