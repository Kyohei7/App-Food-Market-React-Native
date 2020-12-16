import React, { useEffect } from 'react'
import 'react-native-gesture-handler';
import { Text, View, StyleSheet } from 'react-native'
import { Logo } from '../../assets'

const SplashScreen = ({navigation}) => {

    useEffect(() => {
        setTimeout(() => {
            navigation.replace('SignIn')
        }, 3000);
    }, [])

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