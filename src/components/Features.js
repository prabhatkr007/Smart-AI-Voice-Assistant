import { View, Text,StyleSheet,Image } from 'react-native'
import React from 'react'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

export default function Features() {
  return (
    <View style={styles.container0}>
      <Text style={styles.txtFeatures}>Features</Text>
      <View style={styles.container}> 
        <View style={styles.image}>
            <Image style={styles.icon} source={require('../../assets/images/dalleIcon.png')} />
            <Text style={styles.tag}>ChatGPT</Text>
        </View>
        <Text style={styles.tag2}>
            ChatGpt can provide you with instant and knowledgeable responses, assist you with creative ideas on a wide range of topics.
        </Text>
      </View>

      <View style={styles.containerD}> 
        <View style={styles.image}>
            <Image style={styles.icon} source={require('../../assets/images/dalleIcon.png')} />
            <Text style={styles.tag}>DALL-E</Text>
        </View>
        <Text style={styles.tag2}>
           DALL-E can generate imaginative and diverse images from textual description, expanding the boundaries of visual creativiy.
        </Text>
      </View>

      <View style={styles.containerA}> 
        <View style={styles.image}>
            <Image style={styles.icon} source={require('../../assets/images/smartaiIcon.png')} />
            <Text style={styles.tag}>Smart AI</Text>
        </View>
        <Text style={styles.tag2}>
            ChatGpt can provide you with instant and knowledgeable responses, assist you with creative ideas on a wide range of topics.
        </Text>
      </View>
    </View>
  )
}



const styles = StyleSheet.create({
    container0:{
        height:hp(60),
        marginTop:16,
    
    },
    txtFeatures:{
        fontSize:wp(6.5),
        fontWeight:'bold',
        color:'#374151',
        marginHorizontal:9

    },
    container:{
        backgroundColor:'#a7f3d0',
        padding:10,
        borderRadius:10,
        marginTop:9,
        marginHorizontal:8,
        marginVertical:6
    },
    containerD:{
        backgroundColor:'#e9d5ff',
        padding:10,
        borderRadius:10,
        marginTop:9,
        marginHorizontal:8,
        marginVertical:6
    },

    containerA:{
        backgroundColor:'#a5f3fc',
        padding:10,
        borderRadius:10,
        marginTop:9,
        marginHorizontal:8,
        marginVertical:6
    },
    icon:{
        height:hp(4),
        width:hp(4),
        marginRight:5,
    },
    image:{
        flexDirection:'row',
        alignItems:'center',
        
    },
    tag:{
        fontSize:wp(4.8),
        fontWeight:'bold',
        color:'#374151'
    },
    tag2:{
        fontSize:wp(3.8),
        color:'#374151',
        fontWeight:'500',
        marginTop:4

    }


});