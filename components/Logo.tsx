import {View,Image,StyleSheet, ImageStyle, StyleProp} from 'react-native';


// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
const Logo=({style})=>{
    return(
        <View >
            <Image style={style} source={require('../assets/newLogo.png')}/>
        </View>
    )
}

const styles=StyleSheet.create({
    logo:{
        marginBottom:450,
        justifyContent:'center',
        alignItems:'center',
        alignSelf:'center'
    }
})

export default Logo