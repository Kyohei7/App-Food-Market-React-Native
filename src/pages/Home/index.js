import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import { ProfileDummy } from '../../assets'

const Home = () => {
    return (
        <View>
            <View style={styles.profileContainer}>
                <View>
                    <Text style={styles.appName}>FoodMarket</Text>
                    <Text style={styles.title} >Let’s get some foods</Text>
                </View>
                    <Image source={ProfileDummy} style={styles.profile} />
            </View>
        </View>
    )
}

export default Home

const styles = StyleSheet.create({
    profileContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 24,
        paddingTop: 32,
        paddingBottom: 24,
        backgroundColor:'white'
    },
    appName: {
        fontSize: 22,
        fontFamily: 'Poppins-Medium',
        color: '#020202'
    },
    title: {
        fontSize: 14,
        fontFamily: 'Poppins-Light',
        color: '#020202',
        
    },
    profile: {
        width: 50,
        height: 50,
        borderRadius: 8
    }
})
