import React from 'react';
import 'react-native-gesture-handler';
import { StyleSheet } from 'react-native';
import { SplashScreen } from './pages';
import { NavigationContainer } from '@react-navigation/native';


const App = () => {
  return(
      <NavigationContainer>
        <SplashScreen />
      </NavigationContainer>
  )
}

const styles = StyleSheet.create({
  
})

export default App
