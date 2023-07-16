import { View, Text ,StyleSheet, Image, TouchableOpacity} from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { useNavigation } from '@react-navigation/native';

export default function WelcomeScreen() {
    const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container1}>
        <Text style={styles.jarvis}>Jarvis</Text>
        <Text style={styles.tagline}>The Future is here, Powered by AI</Text>
      </View>
      <View style={styles.container2}>
        <Image style={styles.image} source={require('../../assets/images/welcome.png')} />
      </View>
      <TouchableOpacity onPress={() => navigation.navigate('Home')} style={styles.btn}>
        <Text style={styles.btnText}>Get Started</Text>
      </TouchableOpacity>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent:'space-around',
      backgroundColor: '#fff',
    },
    container1:{
        marginTop:8
    },

    jarvis:{
        textAlign:'center',
        fontSize:wp(10),
        fontWeight:'bold',
        color:"#374151",

    },
    tagline:{
        textAlign:'center',
        fontSize:wp(4),
        fontWeight:'bold',
        color:"#4b5563",
        letterSpacing:2,
    },
    container2:{
        flexDirection:'row',
        justifyContent:'center',

    },
    image:{
        width:wp(75),
        height:wp(75),
    },
    btn:{
        backgroundColor:'#059669',
        padding:20,
        borderRadius:15,
        marginHorizontal:12,
    
    },
    btnText:{
        color:'#fff',
        fontWeight:'bold',
        textAlign:'center',
        fontSize:wp(6)
    }

  });
  