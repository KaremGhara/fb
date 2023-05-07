import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import LandingPage from '../screens/LandingPage';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoadingScreen from '../screens/LoadingScreen';
import LoginScreen from '../screens/LoginScreen';
import RegisterScreen from '../screens/RegisterScreen';
import Ionicons from 'react-native-vector-icons/Ionicons';
import ProfileScreen from '../screens/profileScreen';
import 'react-native-gesture-handler';
import {createDrawerNavigator} from '@react-navigation/drawer';


const TabNavigaitor=()=>{
    const Tab = createBottomTabNavigator();

    return(
           <Tab.Navigator     initialRouteName='Home' screenOptions={ ( {route}) => ({
            tabBarIcon: ({ focused, color, size }) => {
              let iconName;
              
              if (route.name === 'Home') {
                iconName = focused
                  ? "home"
                  : 'home-outline';
              } else if (route.name === 'Home') {
                iconName = focused ? "ios-home" : 'ios-home';
              }
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
              return <Ionicons name={iconName} color={color} size={size}/>
            },
            
            tabBarActiveTintColor:'black',
            tabBarShowLabel:true,
            tabBarStyle: {
              backgroundColor: '#262146'
            },
            headerShown:false
            
          })}    >
               <Tab.Screen name='Home' component={LandingPage} />
               <Tab.Screen name='Profile' component={ProfileScreen} />
               <Tab.Screen name='Favorites' component={LandingPage} />

           </Tab.Navigator>

    )
}
const DraweNavigation=()=>{
  const Drawer = createDrawerNavigator();

  return(
    <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={HomeScreen} />
        <Drawer.Screen name="Notifications" component={NotificationsScreen} />
      </Drawer.Navigator>
  )
}

const StackNavigaitor=()=>{
    const Stack = createNativeStackNavigator();

return (
      <Stack.Navigator screenOptions={{headerShown: false}} initialRouteName='LoadingScreen'>
      <Stack.Screen name="LoadingScreen" component={LoadingScreen} /> 
      <Stack.Screen name="RegisterScreen" component={RegisterScreen} /> 
      <Stack.Screen name="LoginScreen" component={LoginScreen} /> 
      <Stack.Screen name="LandingPage" component={TabNavigaitor} />

      </Stack.Navigator>
)
}

export {TabNavigaitor,StackNavigaitor};