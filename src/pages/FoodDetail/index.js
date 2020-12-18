import React from 'react'
import { ImageBackground, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { FoodDummy3, IcBackWhite } from '../../assets'
import { Button, Counter, Rating } from '../../components'

const FoodDetail = ({navigation}) => {
    return (
        <View style={styles.page}>
            <ImageBackground source={FoodDummy3} style={styles.cover} >
                <TouchableOpacity style={styles.back} >
                    <IcBackWhite />
                </TouchableOpacity>
            </ImageBackground>
            <View style={styles.content} >
                <View style={styles.mainContent} >
                    <View style={styles.productContainer} >
                        <View>
                            <Text style={styles.title} > Mie Ayam Bakso </Text>
                            <Rating />
                        </View>
                        <Counter />
                </View>
                    <Text style={styles.desc}>Makanan khas Bandung yang cukup sering dipesan oleh anak muda dengan pola makan yang cukup tinggi dengan mengutamakan diet yang sehat dan teratur.</Text>
                    <Text style={styles.label} > Ingredients: </Text>
                    <Text style={styles.desc}> Mie,bakso,pangsit </Text>
            </View>
                <View style={styles.footer} >
                    <View style={styles.priceContainer} >
                        <Text style={styles.labelTotal} >Total Price:</Text>
                        <Text style={styles.priceTotal} >IDR 120.000</Text>
                    </View>
                    <View style={styles.button} >
                        <Button text="Order Now" onPress={() => navigation.replace('OrderSummary')} />
                    </View>
                </View>
            </View>
        </View>
    )
}

export default FoodDetail

const styles = StyleSheet.create({
    page: {
        flex: 1
    },
    cover: {
        height: 330,
        paddingTop: 26,
        paddingLeft: 22,
    },
    productContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 14
    },
    title: {
        fontSize: 16,
        fontFamily: 'Poppins-Regular',
        color: '#020202'
    },
    label: {
        fontSize: 14,
        fontFamily: 'Poppins-Regular',
        color: '#020202',
        marginBottom: 4
    },
    desc: {
        fontSize: 14,
        fontFamily: 'Poppins-Regular',
        color: '#8D92A3',
        marginBottom: 16
    },
    back: {
        width: 30,
        height: 30,
        justifyContent: 'center',
        alignItems: 'center'
    },
    content: {
        backgroundColor: 'white',
        borderTopRightRadius: 40,
        borderTopLeftRadius: 40,
        marginTop: -40,
        paddingTop: 26,
        paddingHorizontal: 16,
        flex: 1
    },
    mainContent: {
        flex: 1
    },
    footer: {
        flexDirection: 'row',
        paddingVertical: 16,
        alignItems: 'center'
    },
    button: {
        width: 163
    },
    priceContainer: {
        flex: 1
    },
    labelTotal: {
        fontSize: 13,
        fontFamily: 'Poppins-Regular',
        color: '#8D92A3'
    },
    priceTotal: {
        fontSize: 18,
        fontFamily: 'Poppins-Regular',
        color: '#020202'
    }
})
