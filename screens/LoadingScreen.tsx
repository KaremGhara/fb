

import {ImageStyle, Text, StyleSheet, View} from 'react-native';
import Logo from '../components/Logo';
import React, { useState, useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
// import { StackNavigationProp } from '@react-navigation/stack';
// import LoginScreen from './LoginScreen';




// type LoadingScreenProps = StackNavigationProp<RootStackParamList,"LoginScreen">
  
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
const LoadingScreen = ()=>{

    const navigation=useNavigation()

      

    return(
        <View style={styles.container}>
            <View >
                <Logo/>
                
            </View>
            <View>
            <Text style={styles.text} onPress={()=>{navigation.navigate('RegisterScreen')}}>Dispatcher</Text>
            </View>
        </View>
    );
}



const styles=StyleSheet.create({
    container:{
        backgroundColor:'#262146',
        width:'100%',
        height:'100%',
        justifyContent:'center',
        alignItems:'center',
        
        
    },
    text:{
        marginTop:-100,
        color:'#FFFFFF',
        fontFamily:'Roboto',
        fontWeight:'700',
        fontSize:32,
        textAlign:'center',
        
    }
})

export default LoadingScreen;