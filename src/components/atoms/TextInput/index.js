import React from 'react'
import { StyleSheet, Text, View, TextInput as TextInputRN } from 'react-native'

const TextInput = ({label, placeholder}) => {
    return(
        <View>
            <Text style={styles.label} > {label} </Text>
            <TextInputRN style={styles.input} placeholder={placeholder} />
        </View>
    )
}

export default TextInput

const styles = StyleSheet.create({
    label: {
        fontSize: 16,
        fontFamily: 'Poppins-Regular',
        color: '#020202'
    },
    input: {
        borderRadius: 8,
        borderWidth: 1,
        padding: 10,
        borderColor: '#020202'
    }
})