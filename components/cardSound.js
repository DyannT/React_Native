import { StyleSheet, Text, View,TouchableOpacity } from 'react-native'
import React,{useState} from 'react'
import { backgroundColor } from 'react-native/Libraries/Components/View/ReactNativeStyleAttributes';

const cardSound = ({icon,text,bColor}) => {
  const [bgColor,setBGColor] = useState(false);
  // const [active,setActive] = useState(true)
  return (
    <TouchableOpacity  onPress={() => setBGColor(!bgColor)}>
      <View style={[styles.topCard,{backgroundColor:bgColor===false ? "#21283F" : bColor  } ]}>
            {icon}
      </View>
      <View style={styles.bottomCard}>
            <Text style={styles.textBottomCard}>{text}</Text>
      </View>
    </TouchableOpacity>
  )
}

export default cardSound

const styles = StyleSheet.create({
    topCard:{
        width:100,
        height:93,
        backgroundColor:'#21283F',
        borderTopLeftRadius:16,
        borderTopRightRadius:16,
        alignItems: 'center',
        justifyContent: 'center',
    },
    bottomCard:{
      width:100,
      height:32,
      backgroundColor:'#2D344B',
      borderBottomLeftRadius:16,
      borderBottomRightRadius:16,
      alignItems: 'center',
      justifyContent: 'center',
    },
    textBottomCard:{
        fontStyle: 'normal',
        fontWeight: '500',
        fontSize: 10,
        lineHeight: 12,
        color:'#fff'
    }
})