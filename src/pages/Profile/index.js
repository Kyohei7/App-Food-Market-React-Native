import React, { useEffect, useState } from 'react'
import { Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import { ProfileTabSection, Gap } from '../../components'
import { getData } from '../../utils'

const Profile = () => {

    const [ userProfile, setUserProfile ] = useState({})

    useEffect(() => {
        getData('userProfile').then(res => {
            console.log('Data Profile : ', res);
            setUserProfile(res)
        })
    }, [])


    return (
        <ScrollView>
            <View style={styles.page} >
                <View style={styles.profileDetail} >
                    <View style={styles.photo}>
                        <View style={styles.borderPhoto} >
                            <Image 
                                source={{ uri: userProfile.profile_photo_url }}
                                style={styles.photoContainer} 
                                 />
                        </View>
                    </View>
                </View> 
            <Text style={styles.name} >{userProfile.name}</Text>
            <Text style={styles.email}>{userProfile.email}</Text>
            <Gap height={26} />
                <View style={styles.profileTab} >
                    <ProfileTabSection />
                </View>
            </View>
        </ScrollView>
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
