import React from 'react'
import { ScrollView, StyleSheet, Text, View } from 'react-native'
import { Header, TextInput, Gap, Button, Select } from '../../components'
import { useForm } from '../../utils'
import { useDispatch, useSelector } from 'react-redux'
import Axios from 'axios'

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
        console.log('Form : ', form)
        // dispatch({
        //     type: 'SET_ADDRESS', 
        //     value: form
        // })
        const data = {
            ...form,
            ...registerReducer
        }
        console.log('Data Register : ', data )
        Axios.post('http://10.0.2.2:8000/api/register', data)
            .then(res => {
                console.log('Data Success : ', res.data)
                navigation.replace('SuccessSignUp')
            })
            .catch(err => {
                console.log('Error Register : ', err)
            })
        
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