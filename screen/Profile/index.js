import { StyleSheet, Text, View,Dimensions,TouchableOpacity,ScrollView } from 'react-native'

import HeaderTitle from '../../components/headerTitle'
import TagOptions from '../../components/tagOptions'

import FontAwesome from "react-native-vector-icons/FontAwesome";
import Entypo from "react-native-vector-icons/Entypo";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";



import React from 'react'
import { backgroundColor } from 'react-native/Libraries/Components/View/ReactNativeStyleAttributes';


const Profile = () => {
  return (
    <View style={styles.container}>
      <ScrollView style = {styles.listAlbums}>
      <View style={{marginBottom:15}}>
        <HeaderTitle text = {'Profile'} />
      </View>

      <View style={{alignItems: 'center',justifyContent:'center'}}>
        <View style={styles.taglogin}>

          <View style={{paddingBottom:12}}>
            <Entypo name="user" size={67} color="#fff" />
          </View>

          <View>
            <Text style={styles.headerTextTag}>Authorization</Text>
          </View>

          <View style={{paddingBottom:24}}>
            <Text style={styles.bodyTextTag}>In order to access the library of favorite packs 
                                          of sounds, log in with Apple ID</Text>
          </View>

          <View>
            <TouchableOpacity style={styles.button}>
              <Entypo name="app-store" size={15} color="#fff" />
              <Text style={styles.text}>Login with Apple ID</Text>
            </TouchableOpacity>
          </View>

        </View>
      </View>

  
      <View style = {{alignItems: 'center',justifyContent: 'center'}}>
            <View>
              <TagOptions text={'Get premium'} icon = {<FontAwesome5 name="crown" size={15} color="#fff" /> }/>
            </View>

            <View style = {{marginTop:47}}>
              <TagOptions text={'Get premium'} icon = {<FontAwesome5 name="crown" size={15} color="#fff" /> }/>
              <TagOptions text={'Get premium'} icon = {<FontAwesome5 name="crown" size={15} color="#fff" /> }/>
            </View>

            <View style = {{marginTop:47}}>
              <TagOptions text={'Get premium'} icon = {<FontAwesome5 name="crown" size={15} color="#fff" /> }/>
              <TagOptions text={'Get premium'} icon = {<FontAwesome5 name="crown" size={15} color="#fff" /> }/>
            </View>

            <View style = {{marginTop:47}}>
              <TagOptions text={'Get premium'} icon = {<FontAwesome5 name="crown" size={15} color="#fff" /> }/>
            </View>

            <View style = {{marginTop:47}}>
              <TagOptions text={'Get premium'} icon = {<FontAwesome5 name="crown" size={15} color="#fff" /> }/>
              <TagOptions text={'Get premium'} icon = {<FontAwesome5 name="crown" size={15} color="#fff" /> }/>
            </View>
      </View>
      </ScrollView>
    </View>
  )
}

export default Profile

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'#090E18'
  },
  taglogin:{
    width:Dimensions.get('window').width-16*2,
    height:252,
    backgroundColor:'#2D344B',
    borderRadius:24,
    alignItems: 'center',justifyContent:'center',
    marginBottom:32
  },
  headerTextTag:{
    fontStyle: 'normal',
    fontWeight: '600',
    fontSize: 17,
    lineHeight: 22,
    color:'#fff'
  },
  bodyTextTag:{
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: 13,
    lineHeight: 18,
    color:'rgba(235, 235, 245, 0.6)',
    textAlign: 'center'
  },
  button:{
    height:50,
    backgroundColor:'#141927',
    alignItems: 'center',
    justifyContent: 'center',
    width: Dimensions.get("window").width-80,
    borderRadius: 100,
    flexWrap: "nowrap",
    flexDirection: "row",
  },
  text:{
      marginLeft:10.74,
      color:'#fff',
  },
})