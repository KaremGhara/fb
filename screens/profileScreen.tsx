import {View,Text, StyleSheet, Pressable} from 'react-native';
import auth from '@react-native-firebase/auth'

const user=auth().currentUser?.email

const ProfileScreen= ()=>{
    return(
        <View>
            <View style={styles.header}>
                <View style={{margin:10}}>
                     <Text style={styles.userEmail}>
                         Hi {user}
                     </Text>
                </View>
         
            <Pressable style={{margin:10,marginTop:-4}}>
            <Text style={styles.edit}>Edit my profile</Text>
            </Pressable>
            
            </View>
            
        </View>
    )
}
const styles=StyleSheet.create({
    header:{
        height:79,
        backgroundColor:'#FFFFFF',
    },
    userEmail:{
        fontFamily:'Roboto',
        fontSize:24,
        fontWeight:'500',
        lineHeight:32,
        display: 'flex',
        color:'rgba(38, 33, 70, 1)'
    },
    edit:{
        fontSize:14,
        fontWeight:'400',
        lineHeight:32,
        fontFamily:'Roboto',    
    }
})
export default ProfileScreen;