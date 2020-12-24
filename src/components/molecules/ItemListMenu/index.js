import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import { IcNext } from '../../../assets';

const ItemListMenu = ({label, onPress}) => {
    return (
        <View>
            <TouchableOpacity onPress={onPress} >
                <View style={styles.account} >
                    <Text style={styles.label} >{label}</Text>
                    <IcNext />
                </View>
            </TouchableOpacity>
        </View>
    )
}

export default ItemListMenu

const styles = StyleSheet.create({
    account: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 7,
        alignItems: 'center',
    
      },
      label: {
        fontSize: 14,
        fontFamily: 'Poppins-Regular',
        color: '#020202'
      }
})
