import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoadingScreen from './screens/LoadingScreen';
import LoginScreen from './screens/LoginScreen';
import auth from '@react-native-firebase/auth';
import { useState,useEffect } from 'react';
import RegisterScreen from './screens/RegisterScreen';
import LandingPage from './screens/LandingPage';
import  { StackNavigaitor } from './components/TabNavigator';
const Stack = createNativeStackNavigator();

function App() {
  const [user,setUser]= useState();
  function handlesAuthStateChange(user:any) {
    setUser(user);
}
useEffect(() => {
  const subscriber = auth().onAuthStateChanged(handlesAuthStateChange);
  return subscriber; // unsubscribe on unmount
}, []);


  return (
    <NavigationContainer>
    <StackNavigaitor/>
    </NavigationContainer>
  );
}

export default App;
