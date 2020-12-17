import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { IcStarOff, IcStarOn } from '../../../assets'

const Rating = () => {
    return (
        <View style={styles.ratingContainer}>
                    <View style={styles.starContainer}>
                    <IcStarOn /> 
                    <IcStarOn /> 
                    <IcStarOn /> 
                    <IcStarOn />
                    <IcStarOff /> 
                    </View>
                    <Text style={styles.rate}>4.5</Text>
                </View>
    )
}

export default Rating

const styles = StyleSheet.create({
    ratingContainer: {
        flexDirection: 'row'
    },
    starContainer: {
        flexDirection: 'row'
    }, 
    rate: {
        fontSize: 12,
        fontFamily: 'Poppins-Regular',
        color: '#8D92A3'
    }
})
