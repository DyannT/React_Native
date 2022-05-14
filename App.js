import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View,Image,Alert,SafeAreaView,ScrollView,TouchableOpacity } from 'react-native';


import Button from './components/Button'
import CardSound from "./components/cardSound";
import Tag from "./components/Tag"
import Album from "./components/album"


import Camp from './assets/image/album1.png'



import FontAwesome from "react-native-vector-icons/FontAwesome";
import Entypo from "react-native-vector-icons/Entypo";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";

export default function App() {
  return (
    <ScrollView  style={styles.body}>
      <SafeAreaView style={styles.viewSave}>
        <View  style={styles.boxButton}>
          <Button text = {"Press Me"} onPress = {()=>{Alert.alert('Press Me')}}/>
        </View>
        <View  style={styles.boxButton}>
          <Button text = {"Next"}  onPress = {()=>{Alert.alert('Next')}}/>
        </View>
      </SafeAreaView>

    <ScrollView horizontal = {true} showsHorizontalScrollIndicator={false}>
      <View style={styles.libraryCard}>
        <View style={{marginRight:16}}>
            <CardSound text = {"Female Voice"} icon ={<FontAwesome name="female" size={30} color="#fff" />}/>
        </View>
        <View style={{marginRight:16}}>
            <CardSound text = {"While noize"} icon ={<FontAwesome name="female" size={30} color="#fff" />}/>
        </View>
        <View style={{marginRight:16}}>
            <CardSound text = {"Lullaby"} icon ={<FontAwesome name="female" size={30} color="#fff" />}/>
        </View>
        <View style={{marginRight:16}}>
            <CardSound text = {"Forest"} icon ={<FontAwesome name="female" size={30} color="#fff" />}/>
        </View>
        <View style={{marginRight:16}}>
            <CardSound text = {"Ocean"} icon ={<FontAwesome name="female" size={30} color="#fff" />}/>
        </View>
        <View style={{marginRight:16}}>
            <CardSound text = {"Bird"} icon ={<FontAwesome name="female" size={30} color="#fff" />}/>
        </View>
        <View style={{marginRight:16}}>
        <CardSound text = {"Cat"} icon ={<FontAwesome name="female" size={30} color="#fff" />}/>
        </View>
        <View style={{marginRight:16}}>
        <CardSound text = {"Ford"} icon ={<FontAwesome name="female" size={30} color="#fff" />}/>
        </View>
      </View>
    </ScrollView>
    <ScrollView horizontal = {true} showsHorizontalScrollIndicator={false}>
      <View style={styles.libraryCard}>
        <View style={{marginRight:16}}>
            <CardSound text = {"Female Voice"} icon ={<FontAwesome name="female" size={30} color="#fff" />}/>
        </View>
        <View style={{marginRight:16}}>
            <CardSound text = {"While noize"} icon ={<FontAwesome name="female" size={30} color="#fff" />}/>
        </View>
        <View style={{marginRight:16}}>
            <CardSound text = {"Lullaby"} icon ={<FontAwesome name="female" size={30} color="#fff" />}/>
        </View>
        <View style={{marginRight:16}}>
            <CardSound text = {"Forest"} icon ={<FontAwesome name="female" size={30} color="#fff" />}/>
        </View>
        <View style={{marginRight:16}}>
            <CardSound text = {"Ocean"} icon ={<FontAwesome name="female" size={30} color="#fff" />}/>
        </View>
        <View style={{marginRight:16}}>
            <CardSound text = {"Bird"} icon ={<FontAwesome name="female" size={30} color="#fff" />}/>
        </View>
        <View style={{marginRight:16}}>
        <CardSound text = {"Cat"} icon ={<FontAwesome name="female" size={30} color="#fff" />}/>
        </View>
        <View style={{marginRight:16}}>
        <CardSound text = {"Ford"} icon ={<FontAwesome name="female" size={30} color="#fff" />}/>
        </View>
      </View>
    </ScrollView>
    <ScrollView horizontal = {true} showsHorizontalScrollIndicator={false}>
      <View style={styles.libraryCard}>
        <View style={{marginRight:16}}>
            <CardSound text = {"Female Voice"} icon ={<FontAwesome name="female" size={30} color="#fff" />}/>
        </View>
        <View style={{marginRight:16}}>
            <CardSound text = {"While noize"} icon ={<FontAwesome name="female" size={30} color="#fff" />}/>
        </View>
        <View style={{marginRight:16}}>
            <CardSound text = {"Lullaby"} icon ={<FontAwesome name="female" size={30} color="#fff" />}/>
        </View>
        <View style={{marginRight:16}}>
            <CardSound text = {"Forest"} icon ={<FontAwesome name="female" size={30} color="#fff" />}/>
        </View>
        <View style={{marginRight:16}}>
            <CardSound text = {"Ocean"} icon ={<FontAwesome name="female" size={30} color="#fff" />}/>
        </View>
        <View style={{marginRight:16}}>
            <CardSound text = {"Bird"} icon ={<FontAwesome name="female" size={30} color="#fff" />}/>
        </View>
        <View style={{marginRight:16}}>
        <CardSound text = {"Cat"} icon ={<FontAwesome name="female" size={30} color="#fff" />}/>
        </View>
        <View style={{marginRight:16}}>
        <CardSound text = {"Ford"} icon ={<FontAwesome name="female" size={30} color="#fff" />}/>
        </View>
      </View>
    </ScrollView>
    

      <View style={styles.listCategory}>
        <View style={{marginRight:16}}>
          <Tag text = {"All"} icon ={<FontAwesome name="female" size={15} color="#fff" />} />
        </View>
        <View style={{marginRight:16}}>
          <Tag text= {"All"} icon ={<FontAwesome name="female" size={15} color="#fff" />} />
        </View>
        <View style={{marginRight:16}}>
          <Tag text = {"All"} icon ={<FontAwesome name="female" size={15} color="#fff" />}/>
        </View>
      </View>

    <View style={styles.bodyAlbums}>
      <View style={styles.listAlbums}>
        <Album marginAlbums={{marginRight:8}} img = {Camp} icon={<FontAwesome name="play" size={12} color="#fff" />} textHeader={'Guitar Camp'} numberSongs = {'7 Songs'} textType = {'Instrumental'} />
        <Album marginAlbums={{marginLeft:8}} img = {Camp} icon={<FontAwesome name="play" size={12} color="#fff" />} textHeader={'Guitar Camp'} numberSongs = {'7 Songs'} textType = {'Instrumental'} />
      </View>
      <View style={styles.listAlbums}>
        <Album marginAlbums={{marginRight:8}} img = {Camp} icon={<FontAwesome name="play" size={12} color="#fff" />} textHeader={'Guitar Camp'} numberSongs = {'7 Songs'} textType = {'Instrumental'} />
        <Album marginAlbums={{marginLeft:8}} img = {Camp} icon={<FontAwesome name="play" size={12} color="#fff" />} textHeader={'Guitar Camp'} numberSongs = {'7 Songs'} textType = {'Instrumental'} />
      </View>
      <View style={styles.listAlbums}>
        <Album marginAlbums={{marginRight:8}} img = {Camp} icon={<FontAwesome name="play" size={12} color="#fff" />} textHeader={'Guitar Camp'} numberSongs = {'7 Songs'} textType = {'Instrumental'} />
        <Album marginAlbums={{marginLeft:8}} img = {Camp} icon={<FontAwesome name="play" size={12} color="#fff" />} textHeader={'Guitar Camp'} numberSongs = {'7 Songs'} textType = {'Instrumental'} />
      </View>
      <View style={styles.listAlbums}>
        <Album marginAlbums={{marginRight:8}} img = {Camp} icon={<FontAwesome name="play" size={12} color="#fff" />} textHeader={'Guitar Camp'} numberSongs = {'7 Songs'} textType = {'Instrumental'} />
        <Album marginAlbums={{marginLeft:8}} img = {Camp} icon={<FontAwesome name="play" size={12} color="#fff" />} textHeader={'Guitar Camp'} numberSongs = {'7 Songs'} textType = {'Instrumental'} />
      </View>
    </View>

      
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  body:{
    flex: 1,
    backgroundColor:'#141927'
  },
  boxButton:{
    marginVertical:10
  },
  viewSave:{
    alignItems: 'center',
    // justifyContent: 'center',
  },
  libraryCard:{
    flexWrap: "nowrap",
    flexDirection: "row"
  },
  listCategory:{
    flexWrap: "nowrap",
    flexDirection: "row"
  },
  listAlbums:{
    flexWrap: "nowrap",
    flexDirection: "row"
  },
  bodyAlbums:{
    flex:1,
    alignItems: 'center',
    justifyContent: 'center',
    // justifyContent: 'space-around'


  }

});
