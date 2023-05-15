import {View,Text, Image, StyleSheet} from 'react-native';
import CustomButton from './Button';


// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
const Card=({props})=>{
   

    const imageUrl: string = String(props.image);
    return(
    <View style={styles.container}>
        <View >
       <Image style={{width:343,height:149}} source={{uri:imageUrl}} />
        </View>
        <View>
            <View>
            <Text style={styles.time}>
            {props.time}    
            </Text>
            </View>
            <View>
            <Text style={styles.title}>{props.title}</Text>
            </View>
            <View style={{margin:20}}>
                <Text style={styles.headlineSource}>{props.headlineSource}</Text>
            </View>
            <View style={{justifyContent:'center', alignSelf:'center'}}>
                <Text style={styles.content}>{props.content}</Text>
            </View>
            <View style={{justifyContent:'center', alignSelf:'center',margin:10}}>
                <CustomButton anyFun={null} style={[styles.button,styles.textButton]} text={props.text}/>
            </View>
        </View>
    </View>

        
    )
}
const styles=StyleSheet.create({
    container:{
        width:343,
        height:449,
        borderRadius: 20,
        alignSelf:'center',
        backgroundColor:'#FFFFFF',
        margin: 20
    },
    time:{
        fontFamily:'Roboto',
        fontWeight:'400',
        fontSize:14,
        lineHeight:22,
        letterSpacing:0.25,
        color:'grey',
        marginLeft:10,
        marginTop:6
    },
    title:{
        fontSize:18,
        fontWeight:'700',
        lineHeight:21,
        color: 'rgba(20, 20, 43, 1)',
        alignSelf:'stretch',
        justifyContent:'center',
        marginLeft:18
    },
    headlineSource:{
        fontFamily:'Roboto',
        fontStyle:'normal',
        fontWeight:'400',
        fontSize:14,
        display:'flex',
        color:'rgba(90, 90, 137, 0.5)'
    },
    content:{
        fontFamily:'Roboto',
        fontSize:14,
        fontWeight:'400',
        lineHeight:16,
        color:'#5A5A89',
        alignSelf:'stretch'
    },
    button:{
        height:36,
        width:311,
        backgroundColor:'#0058B9',
        borderRadius:20
    },
    textButton:{
        color:'#FFFFFF',
        textAlign:'center',
        fontFamily:'Roboto',
        fontStyle:'normal',
        fontWeight:'500',
        lineHeight:26,
        display:'flex',
        letterSpacing:0.25,
        textTransform:'uppercase',
        fontSize:14
    }
})
export default Card