import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Number } from '..'
import { IcStarOff, IcStarOn } from '../../../assets'

const Rating = ({number}) => {

    const renderStar = () => {

        let star = []

        for( let i = 1; i <= 5; i++ ) {
            if ( i <= number ) {
                star.push( <IcStarOn key={i} /> )
            } else {
                star.push( <IcStarOff key={i} /> )
            }
        }
        return star
    }

    return (
        <View style={styles.ratingContainer}>
            <View style={styles.starContainer}>
                {renderStar()}
            </View>
                <Number number={number} type="decimal" style={styles.rate} />
        </View>
    )
}

export default Rating

const styles = StyleSheet.create({
    ratingContainer: {
        flexDirection: 'row',
    },
    starContainer: {
        flexDirection: 'row',
        marginRight: 4
    }, 
    rate: {
        fontSize: 12,
        fontFamily: 'Poppins-Regular',
        color: '#8D92A3',
        marginTop: 2,
    }
})
