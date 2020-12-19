import React from 'react'
import { Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import { ProfileDummy } from '../../assets'
import { ProfileTabSection, Gap } from '../../components'

const Profile = () => {
    return (
        <ScrollView>
            <View style={styles.page} >
                <View style={styles.profileDetail} >
                    <View style={styles.photo}>
                        <View style={styles.borderPhoto} >
                            <Image style={styles.photoContainer} source={ProfileDummy} />
                        </View>
                    </View>
                </View> 
            <Text style={styles.name} >Muhammad Rizki</Text>
            <Text style={styles.email}>rizkimuhammad2301@gmail.com</Text>
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
