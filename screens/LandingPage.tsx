import {View,Text, StyleSheet, Image, Pressable, ScrollView} from 'react-native';
import Logo from '../components/Logo';
import { Dropdown } from 'react-native-element-dropdown';

// import {TabNavigaitor} from '../components/TabNavigator'
import stylesSheet from '../components/stylesSheet'
import auth from '@react-native-firebase/auth'
import { memo, useState } from 'react';
import Card from '../components/Card';
const LandingPage = ()=>{
    const [value, setValue] = useState(null);
    const data = [
        { label: 'Item 1', value: '1' },
        { label: 'Item 2', value: '2' },
        { label: 'Item 3', value: '3' },
        { label: 'Item 4', value: '4' },
        { label: 'Item 5', value: '5' },
        { label: 'Item 6', value: '6' },
        { label: 'Item 7', value: '7' },
        { label: 'Item 8', value: '8' },
      ];
      const props={
        image:require('../assets/image.png'),
        time:"Friday Jun 25, 2021",
        title:"China's renewed crypto crackdown wipes nearly $300 billion off the market as bitcoin slides ",
        headlineSource:"Arjun Kharpal, CNBC",
        content:"On Friday, Chinese Vice Premier Liu He said it is necessary to “crack down on Bitcoin mining and trading behavior” to prevent risks to the “social field.” For a long time, Chinese authorities have been concerned about the speculative nature of cryptocurrencies ...",
        text:'Navigate to dispatch'
      }
    return(
        <ScrollView>

      
        <View>
            <View style={styles.header}>
                <Logo style={styles.loginLogo}/>
                
            </View>
            <View style={styles.sortView}>
              <Text style={styles.textSort}>Sorty by </Text>
             <Pressable style={styles.image}>
             <Image    source={require("../assets/Forward.png")}/>

             </Pressable>

                

                
            </View>
            <View>
                <Text style={styles.lastLogin}>Last login:</Text>
            </View>
            <View>
                <Text style={styles.preCardText}>Top Headlines in Israel</Text>
                <View style={{margin:20}}>
                <Card props={props}  />
                </View>
            </View>
        </View>
        </ScrollView>
    )
}

const styles=StyleSheet.create({
    preCardText:{
        fontSize:24,
        fontFamily:'Roboto',
        fontWeight:'500',
        color:'#262146',
        marginLeft:10
    },
    image:{
        alignSelf:'center',
        justifyContent:'center',
        alignItems:'center',
        left:17,

    },
    header:{
        backgroundColor:'#262146',
        height:74,
        justifyContent:'center',
        alignItems:'center',

        
    },
    loginLogo:{
        width:50.14,
        height:50,
        marginRight:340
        
    },
    lastLogin:{
        fontSize:12,
        fontWeight:'500',
        fontFamily:'Roboto',
        color:'#5A5A89'
    },
    sortView:{
        height:44,
        flexDirection:'row',
        display:'flex',
        backgroundColor:'#FFFFFF',
        width:'100%'
    },
    textSort:{
        fontSize:16,
        fontFamily:'Roboto',
        fontWeight:'400',
        fontStyle:'normal',
        color:'#5A5A89',
        textAlign:'center',
        top:11,
        left:16
    }
})


export default LandingPage;