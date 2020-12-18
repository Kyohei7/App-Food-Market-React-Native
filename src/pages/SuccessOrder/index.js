import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { IlSuccessOrder } from '../../assets'
import { Button, Gap } from '../../components'

const SuccessOrder = ({navigation}) => {
    return (
        <View style={styles.page}>
            <IlSuccessOrder />
            <Gap height={30} />
            <Text style={styles.title} >You’ve Made Order</Text>
            <Gap height={6} />
            <Text style={styles.subtitle}>Just stay at home while we are</Text>
            <Text style={styles.subtitle}>preparing your best foods</Text>
            <Gap height={30} />
            <View style={styles.button} >
                <Button text="Order Other Foods" onPress={() => navigation.replace('MainApp')} />   
            </View>
            <Gap height={10} /> 
            <View style={styles.button} >
                <Button text="View My Order" textColor='white' color='#8D92A3' onPress={() => navigation.replace('MainApp', {screen: 'Order'})} />   
            </View> 
        </View>
    )
}

export default SuccessOrder

const styles = StyleSheet.create({
    page: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    title: {
        fontSize: 20,
        fontFamily: 'Poppins-Regular',
        color: '#020202'
    },
    subtitle: {
        fontSize: 14,
        fontFamily: 'Poppins-Light',
        color: '#8D92A3',
        textAlign: 'center'
    },
    button : {
        width: '100%',
        paddingHorizontal: 80
    }
})
