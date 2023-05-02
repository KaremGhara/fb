import {View,Image,StyleSheet, ImageStyle, StyleProp} from 'react-native';



const Logo=()=>{
    return(
        <View >
            <Image style={styles.logo} source={require('../assets/newLogo.png')}/>
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