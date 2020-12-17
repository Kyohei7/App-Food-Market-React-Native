import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'
import { Rating } from '..';


const ItemListFood = ({image}) => {
    return (
        <View 
          style={{ 
            flexDirection: 'row', 
            backgroundColor: 'white',
            paddingHorizontal: 24,
            paddingVertical: 8,
            alignItems: 'center' 
          }}>
            <Image source={image} 
                style={{ 
                  width: 80, 
                  height: 80, 
                  borderRadius: 8,
                  overflow: 'hidden',
                  marginRight: 12 
                }} />
            <View style={{ flex: 1 }} >
                <Text style={{ 
                    fontSize: 16,
                    fontFamily: 'Poppins-Regular',
                    color: '#020202'
                 }} > Mie Ayam Bakso </Text>
                <Text style={{ 
                    fontSize: 13,
                    fontFamily: 'Poppins-Regular',
                    color: '#8D92A3'
                 }}> IDR 15.000 </Text>
            </View>
            <View>
                <Rating />
            </View>
        </View>
    )
}

export default ItemListFood

const styles = StyleSheet.create({})
