import {StyleSheet, Text, View,TextInput, Image, ViewStyle, Platform, KeyboardAvoidingView} from 'react-native';
import Logo from '../components/Logo';
import CustomButton from '../components/Button';

import  stylesSheet  from '../components/stylesSheet';
import { ScrollView } from 'react-native-gesture-handler';
import { useEffect, useState } from 'react';
import auth from '@react-native-firebase/auth';
import { useNavigation } from '@react-navigation/native';
import SplashScreen from 'react-native-splash-screen';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
const RegisterScreen=(props)=>{

    const navigation=useNavigation()

    const [email,setEmail]=useState('')
    const [password,setPassword]= useState('');
    const newUser={
        email:email,
        password:password
    }
    useEffect(()=>{
        
  SplashScreen.hide();
})
    

   const handleRegister=()=>{
    console.log(newUser);
    
    auth().createUserWithEmailAndPassword(newUser.email,newUser.password).then(()=>{
        console.log("User Craete!");
        
    })
   }

   const goToLoginPage=()=>{
    navigation.navigate('LoginScreen')
   }

    return(
        <ScrollView>
        <KeyboardAvoidingView  behavior={Platform.OS === 'ios' ? 'padding' : 'position'}>
            <View style={styles.container} >
                <Logo style={stylesSheet(props).logo}/>
            </View>
            <View style={styles.fieldsContainer}>
            
                <Text style={styles.textSignup}>Sign Up</Text>
                
                <View style={styles.inputsContainer}>
                
     
                    <TextInput style={styles.inputsContainer1} onChangeText={(value:string)=>setEmail(value)} placeholderTextColor="#5A5A89"   placeholder='Your Email'/>
                    <TextInput style={styles.inputsContainer1} onChangeText={(value:string)=>setPassword(value)} secureTextEntry={true} placeholderTextColor="#5A5A89" autoCorrect={false}  placeholder='Password'/>
                    <TextInput style={styles.inputsContainer1} onChangeText={(value:string)=>setPassword(value)} secureTextEntry={true} placeholderTextColor="#5A5A89" autoCorrect={false}  placeholder='Re-Enter Password'/>
                    
                </View>
                <Image source={require('../assets/Line.png')}/>

                <View style={{}}>
                    
                    <CustomButton text='Sign up' anyFun={handleRegister} style={[stylesSheet(props).container,stylesSheet(props).text]}/>
                    <CustomButton text='Login' anyFun={goToLoginPage}  style={[stylesSheet(props).container1,stylesSheet(props).logintext]}/>
                </View>
                

            </View>
            

        
        </KeyboardAvoidingView>
        </ScrollView>
    )
}


// const buttonStyle:ViewStyle=StyleSheet.create({
//     containerButton: {
//         flexDirection:'row',
//         display:'flex',
//         justifyContent:'center',
//         alignItems:'center',
//         margin:15,
//         backgroundColor:'#0058B9',
//         height:36,
//         borderRadius:10
//     },
// })

const styles=StyleSheet.create({
    loginButton:{
        display:'flex',
        flexDirection:'row',
        padding:10,
        alignItems:'center',
        backgroundColor:'#F1F1F9',
        height:36
    },
    logintext:{
        fontFamily:'Roboto',
        fontWeight:'400',
        fontSize:14,
        letterSpacing:0.25,
        textAlign:'center'
    },
    signupContainer:{
        flexDirection:'row',
        width:'100%'
        
    },
    
    container:{
        backgroundColor:'#262146',
        height:250,
        
    },
    fieldsContainer:{
        backgroundColor:'#F8F8FF'
    },
    textSignup:{
        fontFamily:'Roboto',
        fontSize:24,
        fontWeight:'700',
        marginLeft:30,

    },
    inputsContainer:{
    },
    inputsContainer1:{
        margin:10,
        color:'#D9DBE9',
        backgroundColor:'#FFFFFF',
        borderRadius:4,
        display:'flex',
        flexDirection:'row',
        borderBottomColor:'black',
        alignSelf:'stretch',
        height:44
    }
})

export default RegisterScreen;