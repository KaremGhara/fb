import {View,Text, StyleSheet, Image, Pressable, StyleProp, ViewStyle} from 'react-native'

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
const CustomButton=({style,text,anyFun})=>{
    //  const renderPermissionText = (value: String) => {
    //     switch (value) {
    //       case 'Partner':
    //       case '1KPartner':
    //       case 'BusinessPartner':
    //         return <Image   source={require('../assets/arrow.png')}/>
    //       default:
    //         return null;
    //     }
    //   };
    return(
        
        <View style={style}>
            <Pressable onPress={anyFun}>
            <Text style={style}>
                {text}
                {text === 'Sign up' || 'Login' && <Image style={styles1.arrow} source={require('../assets/arrow.png')} />}
                

                
                
            </Text>
            </Pressable>
            
        </View>
    )
}
const styles1=StyleSheet.create({
    arrow:{
        marginLeft:50
    }
    // container: {
    //     flexDirection:'row',
    //     display:'flex',
    //     justifyContent:'center',
    //     alignItems:'center',
    //     margin:15,
    //     backgroundColor:'#0058B9',
    //     height:36,
    //     borderRadius:10
    // },
    
})
export default CustomButton;