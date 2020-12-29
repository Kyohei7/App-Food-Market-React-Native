import React from 'react'
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import { Number, Rating } from '..';

// TYPE : product(Home), order-summary, inProgress, past-orders 

const ItemListFood = ({
    image, 
    onPress, 
    rating, 
    items, 
    price,
    type,
    name,
    date,
    status
  }) => {

 const renderContent = () => {
      switch(type) {
        case 'product':
          // Item List Product in Home Page
          return(
            <>
              <View style={styles.content} >
                  <Text style={styles.title} > {name} </Text>
                  <Number number={price} />   
              </View>
                  <Rating number={rating} />
            </>
          )
        case 'order-summary':
          // Item order-summary
            return(
              <>
                <View style={styles.content} >
                  <Text style={styles.title} > {name} </Text>
                  <Text style={styles.price}> IDR {price} </Text>  
                </View>
                  <Text style={styles.items} >{items} items</Text>
              </>
            )
        case 'in-progress':
          // Item in progress
          return(
            <>
              <View style={styles.content} >
              <Text style={styles.title} > {name} </Text>
                <Text style={styles.price}> 
                    {items} items ~ IDR {price} 
                </Text> 
            </View>
            </>
          )
        case 'past-orders':
          // Item past order
          return(
            <>
              <View style={styles.content} >
                <Text style={styles.title} > {name} </Text>
                <Text style={styles.price}> 
                    {items} items ~ IDR {price} 
                </Text>
              </View>
              <View>
                  <Text style={styles.date} >{date}</Text>
                  <Text style={styles.status} >{status}</Text>
                </View> 
            </>
          )
        default: 
          // Item Product
          return(
            <>
              <View style={styles.content} >
                  <Text style={styles.title} > {name} </Text>
                  <Text style={styles.price}> IDR {price} </Text>      
              </View>
                  <Rating />
            </>
          )
      }
 }

    
  return (
      <TouchableOpacity activeOpacity={0.7} onPress={onPress} >
        <View style={styles.container}>
            <Image source={image} style={styles.image} />
            {renderContent()}
        </View>
      </TouchableOpacity>
    )
}

export default ItemListFood

const styles = StyleSheet.create({
  container: { 
    flexDirection: 'row', 
    backgroundColor: 'white',
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
  items: {
    fontSize: 13,
    fontFamily: 'Poppins-Regular',
    color: '#8D92A3'
  },
  date: {
    fontSize: 10,
    fontFamily: 'Poppins-Regular',
    color: '#8D92A3'
  },
  status: {
    fontSize: 10,
    fontFamily: 'Poppins-Regular',
    color: '#D9435E'
  }
})
