import React, { useEffect } from 'react'
import 'react-native-gesture-handler';
import { Text, View, StyleSheet } from 'react-native'
import { Logo } from '../../assets'
import { getData } from '../../utils';

const SplashScreen = ({navigation}) => {

    useEffect(() => {
        setTimeout(() => {
            getData('token').then(res => {
                console.log('Token : ', res)
                if(res) {
                    navigation.reset({index: 0, routes: [{name: 'MainApp'}]})
                } else {
                    navigation.replace('SignIn')
                }
            })
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