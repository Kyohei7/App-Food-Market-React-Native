import React from 'react'
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import { Rating } from '..';


const ItemListFood = ({image, onPress}) => {
    return (
      <TouchableOpacity activeOpacity={0.7} onPress={onPress} >
        <View style={styles.container}>
            <Image source={image} style={styles.image} />
            <View style={styles.content} >
                <Text style={styles.title} > Mie Ayam Bakso </Text>
                <Text style={styles.price}> IDR 15.000 </Text>
            </View>
            <View>
                <Rating />
            </View>
        </View>
      </TouchableOpacity>
    )
}

export default ItemListFood

const styles = StyleSheet.create({
  container: { 
    flexDirection: 'row', 
    backgroundColor: 'white',
    paddingHorizontal: 24,
    paddingVertical: 8,
    alignItems: 'center' 
  },
    image: { 
      width: 80, 
      height: 80, 
      borderRadius: 8,
      overflow: 'hidden',
      marginRight: 12 
  },
    content: { flex: 1 },
    title: { 
      fontSize: 16,
      fontFamily: 'Poppins-Regular',
      color: '#020202'
  },
    price: { 
    fontSize: 13,
    fontFamily: 'Poppins-Regular',
    color: '#8D92A3'
  },
})
