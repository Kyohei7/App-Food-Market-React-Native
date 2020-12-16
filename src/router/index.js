import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { SignIn, SignUp, SignUpAddress, SplashScreen, SuccessSignUp } from '../pages'

const Stack = createStackNavigator()

const Router = () => {
    return(
        <Stack.Navigator>
            <Stack.Screen 
                name="SplashScreen" 
                component={SplashScreen} 
                options={{ headerShown: false }} />
            <Stack.Screen 
                name="SignIn" 
                component={SignIn}
                options={{ headerShown: false }} />
            <Stack.Screen 
                name="SignUp" 
                component={SignUp}
                options={{ headerShown: false }} />
            <Stack.Screen 
                name="SignUpAddress" 
                component={SignUpAddress}
                options={{ headerShown: false }} />
            <Stack.Screen 
                name="SuccessSignUp" 
                component={SuccessSignUp}
                options={{ headerShown: false }} />
        </Stack.Navigator>
    )
}

export default Router