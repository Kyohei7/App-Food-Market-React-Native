import React from 'react'
import { Text, View, StyleSheet, ScrollView } from 'react-native'
import { Header, TextInput, Gap, Button, Select } from '../../components'
import { getData, showMessage, storeData, useForm } from '../../utils'
import Axios from 'axios'
import { API_HOST } from '../../config'

const EditProfile = ({navigation}) => {

    const [form, setForm] = useForm({
        name: '',
        email: '',
        address: '',
        city: '',
        houseNumber: '',
        phoneNumber: ''
    })

    const onSubmit = () => {
        let resultObject = {}
        Object.keys(form).map(object => {
            if (form[object]) {
                resultObject[object] = form[object]
            }
        })
        getData('token').then(resToken => {
            Axios.post(`${API_HOST.url}/user`, resultObject, {
                headers: {
                    'Authorization': resToken.value
                }
            })
            .then((res) => {
                showMessage('Update Data Profile Succees', 'success')
                storeData('userProfile', res.data.data).then(() => {
                    navigation.reset({index: 0, routes: [{name: 'MainApp' }]})
                })
            })
            .catch(err => { 
                showMessage(`${err?.response?.data?.message} 
                on Update Profile API || 'Failed Update Data your Profile'`)
            })
        })
    }

    return (
        <ScrollView contentContainerStyle={{ flexGrow: 1 }} >
            <View style={styles.page} >
            <Header 
                title="Edit Profile" 
                subTitle="Update your data profile" 
                onBack={() => navigation.goBack()} />
            <View style={styles.container}>
                <TextInput 
                    label="Full Name" 
                    placeholder="Type your full name"
                    value={form.name}
                    onChangeText={(value) => setForm('name', value)} />
                <Gap height={16} />
                <TextInput 
                    label="Email Address" 
                    placeholder="Type your email address"
                    value={form.email}
                    onChangeText={(value) => setForm('email', value)} />
                <Gap height={16} />
                <TextInput 
                    label="Address" 
                    placeholder="Type your address"
                    value={form.address}
                    onChangeText={(value) => setForm('address', value)} />
                <Gap height={16} />
                <TextInput 
                    label="House Number" 
                    placeholder="Type your house number"
                    value={form.houseNumber}
                    onChangeText={(value) => setForm('houseNumber', value)} />
                <Gap height={16} />
                <TextInput 
                    label="Phone Number" 
                    placeholder="Type your phone number"
                    value={form.phoneNumber}
                    onChangeText={(value) => setForm('phoneNumber', value)} />
                <Gap height={16} />
                <Select 
                    label="City"
                    value={form.city}
                    onSelectChange={(value) => setForm('city', value)} />
                <Gap height={24} />
                <Button 
                    text="Update" 
                    onPress={onSubmit}
                />
            </View>
        </View>
        </ScrollView>  
    )
}

export default EditProfile

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
