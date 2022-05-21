import { StyleSheet, Text, View,Image,TouchableOpacity,Dimensions } from 'react-native'
import React,{useState} from 'react'
// import Camp from '../assets/image/album1.png'
import { backgroundColor } from 'react-native/Libraries/Components/View/ReactNativeStyleAttributes'

import FontAwesome from "react-native-vector-icons/FontAwesome";
import Entypo from "react-native-vector-icons/Entypo";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";

const album = ({icon,img,textHeader,numberSongs,textType,marginSong,onPress}) => {
  return (
    <View style={{ paddingHorizontal: 8}}>
        <View style = {styles.album}>
            <Image style = {styles.pic} source={img} />
            <TouchableOpacity style = {styles.button}>
                {icon}
            </TouchableOpacity>
        </View>
        <View>
            <Text style = {styles.textHeader}>{textHeader}</Text>
            <View style = {styles.descriptionAlbum}>
                <Text style = {styles.numSongs}>{numberSongs}</Text>
                <FontAwesome style = {styles.dotStyle} name="dot-circle-o" size={4} color="#EBEBF5" />
                <Text style = {styles.songType}>{textType}</Text>
            </View>
        </View>
    </View>
  )
}

export default album

const styles = StyleSheet.create({
    album:{
        width:164,
        height:164,
        overflow: 'hidden',
        flex:1,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius:16,
        borderColor: '#000',
        borderWidth:1,
    },
    pic:{
        width:410.26,
        height:164,
        position:'relative',
    },
    button:{
        width:32,
        height:32,
        position:'absolute',
        backgroundColor:'#141927',
        opacity:0.72,
        top:16,
        left:16,
        borderRadius:50,
        alignItems: 'center',
        justifyContent: 'center',
    },
    textHeader: {
        color:'#fff',
        fontStyle: 'normal',
        fontWeight: '400',
        fontSize: 17,
        lineHeight: 22,
    },
    descriptionAlbum: {
        flexWrap: "nowrap",
        flexDirection: "row"
    },
    numSongs:{
        color: 'rgba(235, 235, 245, 0.6)',
        fontStyle: 'normal',
        fontWeight: '400',
        fontSize: 13,
        lineHeight: 18,
    },
    songType:{
        color: '#9597A3',
        fontStyle: 'normal',
        fontWeight: '400',
        fontSize: 13,
        lineHeight: 18,
    },
    dotStyle:{
        lineHeight:22,
        marginHorizontal:4
    }
})