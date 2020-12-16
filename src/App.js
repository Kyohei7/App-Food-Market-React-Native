import React from 'react';
import 'react-native-gesture-handler';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import Router from './router';


const App = () => {
  return(
      <NavigationContainer>
        <Router />
      </NavigationContainer>
  )
}

const styles = StyleSheet.create({
  
})

export default App
