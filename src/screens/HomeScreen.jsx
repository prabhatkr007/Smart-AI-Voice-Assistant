import { View, Text ,StyleSheet, Image} from 'react-native';
import React, { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import Features from '../components/Features';
import { dummyMessages } from '../constants';


export default function HomeScreen() {
    const [messages, setMessages] = useState(dummyMessages);
  return (
    <View style={styles.container0}>
        <SafeAreaView style={styles.container}>
            <View style={styles.botCnt}>
            <Image style={styles.botIcon} source={require('../../assets/images/bot.png')} />               
            </View>

            {
                messages.length > 0?(
                    <View>

                    </View>
                ):(
                    <Features />
                )
            }

      
      </SafeAreaView>
    </View>
    
  )
}

const styles = StyleSheet.create({
    container0:{
        flex:1,
        backgroundColor:'white'
    },
    container: {
      flex: 1,
      marginHorizontal:5
    },
    botCnt:{
        flexDirection:'row',
        justifyContent:'center'

    },
    botIcon:{
        width:hp(15),
        height:hp(15)
    },
    
});