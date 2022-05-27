import { StyleSheet, Text, View, ScrollView, Dimensions } from 'react-native'
import React from 'react'

import HeaderTitle from '../../components/headerTitle'
import Tag from '../../components/Tag';
import Button from '../../components/Button';
import CardSound from "../../components/cardSound";
import Album from '../../components/album';
import TitleCardSound from '../../components/titleCardSound'

import FontAwesome from "react-native-vector-icons/FontAwesome";
import Feather from "react-native-vector-icons/Feather";
import Entypo from "react-native-vector-icons/Entypo";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

import Ionicons from "react-native-vector-icons/Ionicons"

const index = () => {
  const ListCard1 = [
    {
      text:'Female Voice',
      nameIcon:"female"
    },
    {
      text:'While noize',
      nameIcon:"microphone"
    },    {
      text:'Lullaby',
      nameIcon:"music"
    }
  ];


  return (
    <View style={styles.container}>
      <View>
        <HeaderTitle text={'Composer'} />
      </View>

      <ScrollView>
        <View style={{ paddingVertical: 28 }}>
          <TitleCardSound textHeader={'Child'} textBottom={'Quickly stabilize your baby’s emotions'} />
        </View>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          <View style={styles.libraryCard}>
            {/* <View style={{ marginRight: 16 }}>
              <CardSound text={"Female Voice"} icon={<FontAwesome name="female" size={30} color="#fff" />} />
            </View>
            <View style={{ marginRight: 16 }}>
              <CardSound text={"While noize"} icon={<FontAwesome name="microphone" size={30} color="#fff" />} />
            </View>
            <View style={{ marginRight: 16 }}>
              <CardSound text={"Lullaby"} icon={<FontAwesome name="music" size={30} color="#fff" />} />
            </View> */}

              {ListCard1.map((element,index) => {
                  return (
                    <View key={index} style={{ marginRight: 16 }}>
                            <CardSound text={element.text}  icon={<FontAwesome name= {element.nameIcon} size={30} color="#fff" />} bColor = {"#4870FF"} />
                    </View>
                  );
              })}

          </View>
        </ScrollView>

        <View style={{ paddingVertical: 28 }}>
          <TitleCardSound textHeader={'Nature'} textBottom={'It will allow you to merge with nature'} />
        </View>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          <View style={styles.libraryCard}>
            {/* <View style={{ marginRight: 16 }}>
              <CardSound text={"Rain"} icon={<Feather name="cloud-rain" size={30} color="#fff" />} />
            </View>
            <View style={{ marginRight: 16 }}>
              <CardSound text={"Forest"} icon={<FontAwesome name="tree" size={30} color="#fff" />} />
            </View>
            <View style={{ marginRight: 16 }}>
              <CardSound text={"Ocean"} icon={<MaterialCommunityIcons name="digital-ocean" size={30} color="#fff" />} />
            </View>
            <View style={{ marginRight: 16 }}>
              <CardSound text={"Fire"} icon={<FontAwesome name="fire" size={30} color="#fff" />} />
            </View>
            <View style={{ marginRight: 16 }}>
              <CardSound text={"Storm"} icon={<FontAwesome5 name="poo-storm" size={30} color="#fff" />} />
            </View> */}

              {ListCard1.map((element,index) => {
                  return (
                    <View key={index} style={{ marginRight: 16 }}>
                            <CardSound text={element.text}  icon={<FontAwesome name= {element.nameIcon} size={30} color="#fff" />} bColor = {"#00D971"} />
                    </View>
                  );
              })}


          </View>
        </ScrollView>

        <View style={{ paddingVertical: 28 }}>
          <TitleCardSound textHeader={'Animals'} textBottom={'Animal voices will improve your sleep'} />
        </View>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          <View style={styles.libraryCard}>
            {/* <View style={{ marginRight: 16 }}>
              <CardSound text={"Birds"} icon={<FontAwesome5 name="kiwi-bird" size={30} color="#fff" />} />
            </View>
            <View style={{ marginRight: 16 }}>
              <CardSound text={"Cats"} icon={<FontAwesome5 name="cat" size={30} color="#fff" />} />
            </View>
            <View style={{ marginRight: 16 }}>
              <CardSound text={"Frogs"} icon={<FontAwesome5 name="frog" size={30} color="#fff" />} />
            </View> */}

              {ListCard1.map((element,index) => {
                  return (
                    <View key={index} style={{ marginRight: 16 }}>
                            <CardSound text={element.text}  icon={<FontAwesome name= {element.nameIcon} size={30} color="#fff" />} bColor = {"#FF9C41"} />
                    </View>
                  );
              })}

          </View>
        </ScrollView>

        <View style={{ paddingVertical: 28 }}>
          <TitleCardSound textHeader={'Industrial'} textBottom={'Quickly stabilize your baby’s emotions'} />
        </View>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          <View style={styles.libraryCard}>
            {/* <View style={{ marginRight: 16 }}>
              <CardSound text={"Train"} icon={<FontAwesome name="train" size={30} color="#fff" />} />
            </View>
            <View style={{ marginRight: 16 }}>
              <CardSound text={"Aircraft"} icon={<FontAwesome name="send" size={30} color="#fff" />} />
            </View>
            <View style={{ marginRight: 16 }}>
              <CardSound text={"City"} icon={<FontAwesome5 name="city" size={30} color="#fff" />} />
            </View>
            <View style={{ marginRight: 16 }}>
              <CardSound text={"Caffe"} icon={<Feather name="coffee" size={30} color="#fff" />} />
            </View> */}

              {ListCard1.map((element,index) => {
                  return (
                    <View key={index} style={{ marginRight: 16 }}>
                            <CardSound text={element.text}  icon={<FontAwesome name= {element.nameIcon} size={30} color="#fff" />} bColor = {"#FF2D55"} />
                    </View>
                  );
              })}

            
          </View>
        </ScrollView>

      </ScrollView>


    </View>
  )
}

export default index

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#090E18'
  },
  libraryCard: {
    flexWrap: "nowrap",
    flexDirection: "row"
  },
})