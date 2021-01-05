import React, { useEffect, useState } from 'react'
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { ProfileTabSection } from '../../components'
import { getData, showMessage, storeData } from '../../utils'
import { launchImageLibrary } from 'react-native-image-picker';
import Axios from 'axios';
import { API_HOST } from '../../config';

const Profile = ({navigation}) => {

    const [ userProfile, setUserProfile ] = useState({})

    useEffect(() => {
        navigation.addListener('focus', () => {
            updateUserProfile()
        })
    }, [navigation])

    const updateUserProfile = () => {
        getData('userProfile').then((res) => {
            setUserProfile(res)
        })
    }

    const updatePhoto = () => {
        launchImageLibrary({
            quality: 0.5,
            maxWidth: 200,
            maxHeight: 200
        
        }, (response) => {
            if( response.didCancel || response.errorMessage ) {
                showMessage('Anda Tidak Memilih Photo')
            } else {
                const source = {uri: response.uri}
                const dataImage = {
                    uri: response.uri,
                    type: response.type,
                    name: response.fileName
                }

                const photoForUpload = new FormData()
                photoForUpload.append('file', dataImage)
                getData('token').then(resToken => {
                    Axios.post(`${API_HOST.url}/user/photo`, photoForUpload, {
                        headers: {
                            'Authorization': resToken.value,
                            'Content-Type': 'multipart/form-data'
                        }
                    })
                    .then(res => {
                        getData('userProfile').then(resUser => {
                            showMessage('Update Photo Success', 'success')
                            resUser.profile_photo_url = `http://10.0.2.2:8000/storage/${res.data.data[0]}`
                            storeData('userProfile', resUser).then(() => {
                            updateUserProfile()
                            })
                        })
                    })
                    .catch(err => {
                        showMessage('Update Photo Failed', 'danger')
                    })
                })
            }
        })
    }


    return (
            <View style={styles.page} >
                <View style={styles.profileDetail} >
                    <View style={styles.photo}>
                    <TouchableOpacity onPress={updatePhoto} >
                        <View style={styles.borderPhoto} >
                            <Image 
                                source={{ uri: userProfile.profile_photo_url }}
                                style={styles.photoContainer} 
                                 />
                        </View>
                    </TouchableOpacity>   
                    </View> 
                <Text style={styles.name} >{userProfile.name}</Text>
                <Text style={styles.email}>{userProfile.email}</Text>
            </View>
            <View style={styles.profileTab} >
                    <ProfileTabSection />
                </View>
            </View>
    )
}

export default Profile

const styles = StyleSheet.create({
    page: {
        backgroundColor: 'white',
        flex: 1
    },
    profileTab: {
        flex: 1
    },
    profileDetail: {
        backgroundColor: 'white',
        
    },
    name: {
        fontSize: 18,
        fontFamily: 'Poppins-Medium',
        color: '#020202',
        textAlign: 'center'
    },
    email: {
        fontSize: 14,
        fontFamily: 'Poppins-Light',
        color: '#8D92A3',
        textAlign: 'center'
    },
    photo: {
        alignItems: 'center',
        marginTop: 26,
        marginBottom: 16
    },
    photoContainer: {
        width: 90,
        backgroundColor: '#F0F0F0',
        height: 90,
        borderRadius: 90,
        padding: 24,
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
