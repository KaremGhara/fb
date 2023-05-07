import {StyleSheet} from 'react-native';

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
const styles = (props) => StyleSheet.create({
    container: {
        flexDirection:'row',
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        margin:15,
        backgroundColor:'#0058B9',
        height:36,
        borderRadius:10,
        width:335,
        alignSelf:'center',


    },
    text:{
        fontSize:14,
        fontFamily:'Roboto',
        fontWeight:'500',
        fontStyle:'normal',
        display:'flex',
        color:'#FFFFFF',
        textAlign:'center'
    },
    // loginButton:{
    //     display:'flex',
    //     flexDirection:'row',
    //     padding:10,
    //     alignItems:'center',
    //     backgroundColor:'#F1F1F9',
    //     height:36
    // },
    logintext:{
        fontFamily:'Roboto',
        fontWeight:'400',
        fontSize:14,
        letterSpacing:0.25,
        textAlign:'center'
    },
    container1: {
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        alignSelf:'center',
        margin:3,
        backgroundColor:'#F1F1F9',
        height:36,
        borderRadius:10,
        width:335
    },
    logo:{
        marginBottom:450,
        justifyContent:'center',
        alignItems:'center',
        alignSelf:'center'
        
    },
    logo2:{
        justifyContent:'center',
        alignItems:'center',
        alignSelf:'center'
        
    }
   
    
})

export default styles