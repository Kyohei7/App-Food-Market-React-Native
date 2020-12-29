import React from 'react'
import { ScrollView, StyleSheet, Text, View } from 'react-native'
import { FoodDummy1 } from '../../assets'
import { Button, Header, ItemListFood, ItemValue } from '../../components' 

const OrderSummary = ({navigation, route}) => {

    const { item, transaction, userProfile } = route.params

    return (
        <ScrollView>
            <Header 
                title="Payment" 
                subTitle="You deserve better meal" 
                onBack={() =>  navigation.goBack() } 
            />
            <View style={styles.content}>
                <Text style={styles.label} >Item Ordered</Text>
                <ItemListFood
                    type="order-summary"
                    name={item.name}
                    price={item.price} 
                    image={{ uri: item.picturePath }} 
                    items={transaction.totalItem} />
                <Text style={styles.label} >Details Transaction</Text>
                <ItemValue label={item.name} value={transaction.totalPrice} type="currency" />
                <ItemValue label="Driver" value={transaction.driver} type="currency" />
                <ItemValue label="Tax 10%" value={transaction.tax} type="currency" />
                <ItemValue label="Total Price" value={transaction.total} type="currency" valueColor='#1ABC9C' />
            </View>

            <View style={styles.content}>
                <Text style={styles.label} >Deliver to:</Text>
                <ItemValue label="Name" value={userProfile.name} />
                <ItemValue label="Phone No." value={userProfile.phoneNumber} />
                <ItemValue label="Address" value={userProfile.address} />
                <ItemValue label="House No." value={userProfile.houseNumber} />
                <ItemValue label="City" value={userProfile.city} />
            </View>

            <View style={styles.button} >
                <Button 
                    text="Checkout Now" 
                    onPress={() => navigation.replace('SuccessOrder')} />
            </View>
        </ScrollView>
    )
}

export default OrderSummary

const styles = StyleSheet.create({
    content: {
        backgroundColor: 'white',
        paddingHorizontal: 24,
        paddingVertical: 16,
        marginTop: 24
    },
    label: {
        fontSize: 14,
        fontFamily: 'Poppins-Regular',
        color: '#020202',
        marginTop: 8
    },
    button: {
        paddingHorizontal: 24,
        marginBottom: 24
    }
})
