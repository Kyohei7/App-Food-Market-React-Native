import React from 'react'
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { Rating } from '..'
import { FoodDummy1} from '../../../assets'

const FoodCard = () => {
    return (
        <TouchableOpacity activeOpacity={0.7}>
            <View style={styles.container} >
                <Image source={FoodDummy1} />
                <View style={styles.content} >
                    <Text style={styles.text}> Mie Ayam Bakso </Text>
                    <Rating />
                </View>
            </View>
        </TouchableOpacity>
    )
}

export default FoodCard

const styles = StyleSheet.create({
    container: {
        width: 200,
        backgroundColor: 'white',
        borderRadius: 8,
        shadowColor: 'black',
        shadowOffset: {width: 0, height: 7},
        shadowOpacity: 0.5,
        shadowRadius: 10,
        elevation: 14,
        overflow: 'hidden',
        marginRight: 24,
    },
    content: {
        padding: 12
    },
     
    text: {
        fontSize: 16,
        fontFamily: 'Poppins-Regular',
        color: '#020202'
    },
})
