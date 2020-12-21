import React from 'react'
import { ScrollView, StyleSheet, View } from 'react-native'
import { Header, TextInput, Gap, Button, Select } from '../../components'
import { useForm } from '../../utils'
import { useSelector, useDispatch } from 'react-redux'
import Axios from 'axios'
import { showMessage, hideMessage } from "react-native-flash-message";

const SignUpAddress = ({navigation}) => {

    const [form, setForm] = useForm({
        phoneNumber: '',
        address: '',
        houseNumber: '',
        city: 'Jakarta'
    })

    const dispatch = useDispatch()

    const registerReducer = useSelector(state => state.registerReducer)

    const onSubmit = () => {
        const data = {
            ...form,
            ...registerReducer
        }
        console.log('Data Register : ', data )
        dispatch({ type: 'SET_LOADING', value: true })
        Axios.post('http://10.0.2.2:8000/api/register', data)
            .then(res => {
                showMessage('Register Success', 'success')
                dispatch({ type: 'SET_LOADING', value: false })
                navigation.replace('SuccessSignUp')
            })
            .catch(err => {
                dispatch({ type: 'SET_LOADING', value: false })
                showToast(err?.response?.data?.data?.message)
            })
    }


    const showToast = (message, type) => {
        showMessage({
            message,
            type: type === 'success' ? 'success' : 'danger',
            backgroundColor: type === 'success' ? '#1ABC9C' : '#D9435E'
          });
    }

    return(
        <ScrollView contentContainerStyle={{ flexGrow: 1 }} >
            <View style={styles.page} >
                <Header title="Address" subTitle="Make sure it’s valid" onBack={() => {}} />
                <View style={styles.container}>
                    <TextInput 
                        label="Phone No."
                        placeholder="Type your phone number"
                        value={form.phoneNumber}
                        onChangeText={(value) => setForm('phoneNumber', value)} />
                    <Gap height={16} />
                    <TextInput 
                        label="Address" 
                        placeholder="Type your address"
                        value={form.address}
                        onChangeText={(value) => setForm('address', value)} />
                    <Gap height={16} />
                    <TextInput 
                        label="House No." 
                        placeholder="Type your house number"
                        value={form.houseNumber}
                        onChangeText={(value) => setForm('houseNumber', value)} />
                    <Gap height={16} />
                    <Select 
                        label="City"
                        value={form.city}
                        onSelectChange={(value) => setForm('city', value)} />
                    <Gap height={24} />
                    <Button 
                        text="Sign Up Now" 
                        onPress={onSubmit} 
                    />
                </View>
            </View>
        </ScrollView>
    )
}

export default SignUpAddress

const styles = StyleSheet.create({
    page: {
        flex : 1
    },  
    container: {
        backgroundColor: 'white',
        paddingHorizontal: 24,
        paddingVertical: 26,
        marginTop: 24,
        flex: 1
    },
    
})