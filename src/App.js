import React from 'react';
import 'react-native-gesture-handler';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import Router from './router';
import { Provider } from 'react-redux'
import store from './redux/store';


const App = () => {
  return(
      <NavigationContainer>
        <Provider store={store} >
          <Router />
        </Provider>
      </NavigationContainer>
  )
}

const styles = StyleSheet.create({
  
})

export default App
