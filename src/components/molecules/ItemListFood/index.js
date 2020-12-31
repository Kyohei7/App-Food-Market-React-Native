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
                  <Text style={styles.title} >{name}</Text>
                  <Number number={price} style={styles.price} />   
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
                  <Number number={price} style={styles.price} />   
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
              <View style={styles.row} >
                <Text style={styles.price}>{items} items</Text>
                <View style={styles.dot} />
                <Number number={price} style={styles.price} />
              </View>
            </View>
            </>
          )
        case 'past-orders':
          // Item past order

          const formatedDate = new Date(date).toDateString()

          return(
            <>
              <View style={styles.content} >
                <Text style={styles.title} >{name}</Text>
                <View style={styles.row} >
                  <Text style={styles.price}>{items} items</Text>
                  <View style={styles.dot} />
                  <Number number={price} style={styles.price} />
                </View>
              </View>
                <View>
                  <Text style={styles.date} >{formatedDate}</Text>
                  <Text style={styles.status(status)} >{status}</Text>
                </View> 
            </>
          )
        default: 
          // Item Product
          return(
            <>
              <View style={styles.content} >
                  <Text style={styles.title} >{name}</Text>
                  <Number number={price} style={styles.price} />       
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
  status: (status) => ({
    fontSize: 10,
    fontFamily: 'Poppins-Regular',
    color: status === 'CANCELLED' ? '#D9435E' : '#1ABC9C'
  }), 
  row: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  dot: {
    width: 3,
    height: 3,
    borderRadius: 3,
    backgroundColor: '#8D92A3',
    marginHorizontal: 4,
  }
})
