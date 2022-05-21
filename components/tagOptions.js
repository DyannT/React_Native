import { StyleSheet, Text, View,Dimensions,TouchableOpacity } from 'react-native'
import React from 'react'

import FontAwesome from "react-native-vector-icons/FontAwesome";
import Entypo from "react-native-vector-icons/Entypo";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";

const tagOptions = ({text,colorView,colorText,icon,colorIcon}) => {
  return (
    <TouchableOpacity style={styles.sizeTag}>
      <View style={{flexWrap: "nowrap",flexDirection: "row",alignItems: "center"}}>
        <View style={[styles.viewIcon,{colorView}]}> 
            {icon}
        </View>
        <Text style={[styles.textTag,{colorText}]}>{text}</Text>
      </View>
      
      <View style={styles.arrowRight} >
        <FontAwesome5 name="arrow-right" size={15} color="#FF9C41" />
      </View>
    </TouchableOpacity>
  )
}

export default tagOptions

const styles = StyleSheet.create({
    sizeTag:{
        width:Dimensions.get('window').width-1,
        height:47,
        borderTopColor:'#21283F',
        borderWidth:1,
        borderBottomColor:'#21283F',
        justifyContent: 'center',
        position: 'relative',
    },
    textTag:{
        color:'#FF9C41',
        fontStyle: 'normal',
        fontWeight: '400',
        fontSize: 17,
        lineHeight: 22,

    },
    viewIcon:{
        width:28,
        height:28,
        backgroundColor:'#FF9C41',
        justifyContent:'center',
        alignItems:'center',
        borderRadius:8,
        marginHorizontal:16
    },
    arrowRight:{
        position:'absolute',
        right:16,
    }

})