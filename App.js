import { StyleSheet, Text, View,SafeAreaView,Button } from 'react-native'

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';



import FontAwesome from "react-native-vector-icons/FontAwesome";
import Entypo from "react-native-vector-icons/Entypo";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";

import Composer from './screen/Composer'
import SleepScreen from './screen/SleepScreen'
import Profile from './screen/Profile'


import React from 'react'



const Tab = createBottomTabNavigator();


const App = () => {
  return (

    <NavigationContainer>
     <Tab.Navigator screenOptions={{
        tabBarShowLabel: true,
        tabBarLabelStyle: {
          fontSize: 12,
        },
        tabBarActiveTintColor: "#4870FF",
        tabBarInactiveTintColor: "#8E8E93",
        tabBarShadowVisible: false,
        // Floating Tab Bar...
        tabBarStyle: {
          backgroundColor: "rgba(33, 40, 63, 1)",
          position: "relative",
          bottom: 0,
          marginHorizontal: 0,
          // Max Height...
          height: 60,
          // Shadow...
          shadowColor: "red",
          borderBottomWidth: 0,
          borderTopWidth: 0,
          elevation: 0,
          shadowOpacity: 0,
          shadowOffset: {
            width: 0,
            height: 0,
          },
          padding: 0,
          paddingBottom: 10,
        },
      }}>
       <Tab.Screen name="Discover" component={SleepScreen} 
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <View
              style={{
                // centring Tab Button...
                position: "absolute",
                top: 10,
              }}
            >
              <FontAwesome5
                name="home"
                size={20}
                color={focused ? "#4870FF" : "#8E8E93"}
              ></FontAwesome5>
            </View>
          ),
        }} />
       <Tab.Screen name="Composer" component={Composer} 
       options={{
        headerShown: false,
        tabBarIcon: ({ focused }) => (
          <View
            style={{
              // centring Tab Button...
              position: "absolute",
              top: 10,
            }}
          >
            <FontAwesome
              name="music"
              size={20}
              color={focused ? "#4870FF" : "#8E8E93"}
            ></FontAwesome>
          </View>
        ),
      }}/>
      <Tab.Screen name="Profile" component={Profile} 
       options={{
        headerShown: false,
        tabBarIcon: ({ focused }) => (
          <View
            style={{
              // centring Tab Button...
              position: "absolute",
              top: 10,
            }}
          >
            <FontAwesome
              name="user"
              size={20}
              color={focused ? "#4870FF" : "#8E8E93"}
            ></FontAwesome>
          </View>
        ),
      }}/>
     </Tab.Navigator>
   </NavigationContainer>

  
//   <NavigationContainer>
//   <Tab.Navigator>
//     <Tab.Screen name="Home" component={SleepScreen}  />
//     <Tab.Screen name="Settings" component={SleepScreen} />
//   </Tab.Navigator>
// </NavigationContainer>


  )
}

export default App

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'#090E18'
  }
})