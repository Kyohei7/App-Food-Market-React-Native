import React from 'react'
import 'react-native-gesture-handler';
import { Text, View, StyleSheet } from 'react-native'
import { Logo } from '../../assets'

const SplashScreen = () => {
    return(
            <View style={styles.container}>
                <Logo />
                <View style={{ height: 33 }} />
                <Text style={styles.title} >FoodMarket</Text>
            </View>             
    )
}

export default SplashScreen

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#FFC700',
        alignItems: 'center', 
        justifyContent: 'center',
        flex: 1 
        
    },
    title: {
        fontSize: 32, 
        color: '#020202',
        fontFamily: 'Poppins-Medium'
    }
})