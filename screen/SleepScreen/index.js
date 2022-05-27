import { StyleSheet, Text, View,ScrollView,Dimensions } from 'react-native'

import HeaderTitle from '../../components/headerTitle'
import Tag from '../../components/Tag';
import Button from '../../components/Button';
import CardSound from '../../components/Button';
import Album from '../../components/album';


import Camp from '../../assets/image/album1.png';
import Moon from '../../assets/image/album2.png';
import Swamp from '../../assets/image/album3.png';
import Forest from '../../assets/image/album4.png';
import Moon1 from '../../assets/image/album5.png';
import Sea from '../../assets/image/album6.png';




import React from 'react'

import FontAwesome from "react-native-vector-icons/FontAwesome";
import Entypo from "react-native-vector-icons/Entypo";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import Ionicons from "react-native-vector-icons/Ionicons"
import { backgroundColor } from 'react-native/Libraries/Components/View/ReactNativeStyleAttributes';


const SleepScreen = () => {
  const dataMusic = [
    {
      title: "Guitar Camp",
      image: require("../../assets/image/album1.png"),
      
      image: require("../../assets/image/album1.png"),
      numberSong: 7,
      category: "Instrumental",
    },
    {
      title: "Chill-hop",
      image: require("../../assets/image/album2.png"),
      numberSong: 7,
      category: "Jaz",
    },
    {
      title: "Pack name",
      image:require("../../assets/image/album3.png"),
      numberSong: 5,
      category: "Ballad",
    },
    {
      title: "Guitar Camp",
      image:require("../../assets/image/album4.png"),
      numberSong: 6,
      category: "Instrumental",
    },
    {
      title: "Guitar Camp",
      image: require("../../assets/image/album5.png"),
      numberSong: 12,
      category: "Instrumental",
    },
    {
      title: "Guitar Camp",
      image:require("../../assets/image/album6.png"),
      numberSong: 12,
      category: "Instrumental",
    },
  ];

  return (
    <View style={styles.container}>
      {/* HeaderTitle */}
      <View>
        <HeaderTitle text = {'Sleep'} />
      </View>

      {/* List Tags */}
      <View style = {styles.listTags}>
        <View style = {{marginHorizontal:16}}>
          <Tag text = {"All"} icon ={<FontAwesome name="list" size={15} color="#fff" />} />
        </View>
        <View>
          <Tag text = {"Ambient"} icon ={<Ionicons name="people" size={15} color="#fff" />} />
        </View>
        <View style = {{marginHorizontal:16}}>
          <Tag text = {"For Kids"} icon ={<FontAwesome name="child" size={15} color="#fff" />} />
        </View>
      </View>

      {/* List Album*/}
      <ScrollView style = {[,styles.listAlbums]}>
      {/* <View style = {{alignItems: 'center',justifyContent: 'center'}}>
          <View style = {styles.albums}> */}
            {/* <View style = >
              <Album img = {Camp} icon={<FontAwesome name="play" size={12} color="#fff" />} textHeader={'Guitar Camp'} numberSongs = {'7 Songs'} textType = {'Instrumental'} />
              <Album img = {Moon} icon={<FontAwesome name="play" size={12} color="#fff" />} textHeader={'Chill-hop'} numberSongs = {'7 Songs'} textType = {'Instrumental'} />
            </View>

            <View style = {styles.albums}>
              <Album img = {Swamp} icon={<FontAwesome name="play" size={12} color="#fff" />} textHeader={'Pack name'} numberSongs = {'4 hours'} textType = {'Category name'} />
              <Album img = {Forest} icon={<FontAwesome name="play" size={12} color="#fff" />} textHeader={'Pack name'} numberSongs = {'4 hours'} textType = {'Category name'} />
            </View>

            <View style = {styles.albums}>
              <Album img = {Moon1} icon={<FontAwesome name="play" size={12} color="#fff" />} textHeader={'Pack name'} numberSongs = {'4 hours'} textType = {'Category name'} />
              <Album img = {Sea} icon={<FontAwesome name="play" size={12} color="#fff" />} textHeader={'Pack name'} numberSongs = {'4 hours'} textType = {'Category name'} />
            </View> */}

      <View
          style={{
            alignItems: "flex-start",
            justifyContent: "space-between",
            flexDirection: "row",
            flexWrap: "wrap",
            paddingHorizontal: 16,
          }}
        >
            {dataMusic.map((element, index) => {
                  return (
                    <View key={index}>
                      <Album image={element.image} title={element.title} numberSong={element.numberSong} category={element.category}/>
                    </View>
                  );
                })}
          {/* </View>
      </View> */}
      </View>
      </ScrollView>
    </View>
  )
}

export default SleepScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'#090E18'
  },
  listTags:{
    flexWrap: "nowrap",
    flexDirection: "row",
  },
  albums:{
    flexWrap: "nowrap",
    flexDirection: "row",
    marginTop: 16,
  },
  listAlbums:{
    height:Dimensions.get('window').height - 200,
    marginTop:20
  }
  
})