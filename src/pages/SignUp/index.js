import React, { useState } from 'react'
import { Text, View, StyleSheet, ScrollView, TouchableOpacity, Image } from 'react-native'
import { Header, TextInput, Gap, Button } from '../../components'
import { useDispatch, useSelector } from 'react-redux'
import { showMessage, useForm } from '../../utils'
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';

const SignUp = ({navigation}) => {

    const [form, setForm] = useForm({
        name: '',
        email: '',
        password: ''
    })

    const [photo, setPhoto] = useState('')

    const dispatch = useDispatch()

    const onSubmit = () => {
        console.log('form : ', form)
        dispatch({type: 'SET_REGISTER', value: form})
        navigation.replace('SignUpAddress')
    }

    const addPhoto = () => {
        launchImageLibrary({
            quality: 0.5,
            maxWidth: 200,
            maxHeight: 200
        
        }, (response) => {
            console.log('Response : ', response)
            if( response.didCancel || response.errorMessage ) {
                showMessage('Anda Tidak Memilih Photo')
            } else {
                const source = {uri: response.uri}
                const dataImage = {
                    uri: response.uri,
                    type: response.type,
                    name: response.fileName
                }

                setPhoto(source)
                dispatch({ type: 'SET_PHOTO', value: dataImage })
                dispatch({ type: 'SET_UPLOAD_STATUS', value: true })

            }
        })
    }

    return(
        <ScrollView contentContainerStyle={{ flexGrow: 1 }} >
            <View style={styles.page} >
            <Header 
                title="Sign Up" 
                subTitle="Register and eat" 
                onBack={() => navigation.goBack()} />
            <View style={styles.container}>
                <View style={styles.photo}>
                    <TouchableOpacity onPress={addPhoto} >
                        <View style={styles.borderPhoto} >
                            {photo ? ( 
                                <Image source={photo} style={styles.photoContainer} /> 
                            ) : (
                                <View style={styles.photoContainer} >
                                    <Text style={styles.addPhoto} >Add Photo</Text>
                            </View>) }
                        </View>
                    </TouchableOpacity>
                </View>
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
                    label="Password" 
                    placeholder="Type your email password"
                    value={form.password}
                    onChangeText={(value) => setForm('password', value)}
                    secureTextEntry />
                <Gap height={24} />
                <Button 
                    text="Continue" 
                    onPress={onSubmit}
                />
            </View>
        </View>
        </ScrollView>  
    )
}

export default SignUp

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
    photo: {
        alignItems: 'center',
        marginTop: 26,
        marginBottom: 16
    },
    addPhoto: {
        fontFamily: 'Poppins-Light',
        fontSize: 14,
        color: '#8D92A3',
        textAlign: 'center',
    },
    photoContainer: {
        width: 90,
        backgroundColor: '#F0F0F0',
        height: 90,
        borderRadius: 90,
        justifyContent: 'center',
        alignItems: 'center'
    },
    borderPhoto: {
        borderWidth: 1,
        borderColor: '#8D92A3',
        width: 110,
        height: 110,
        borderRadius: 100,
        borderStyle: 'dashed',
        justifyContent: 'center',
        alignItems: 'center'
    }
})

