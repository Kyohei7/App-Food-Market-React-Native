import React from 'react'
import { Text, View, StyleSheet } from 'react-native'
import { Header, TextInput, Gap, Button } from '../../components'

const SignUp = ({navigation}) => {
    return(
        <View style={styles.page} >
            <Header title="Sign Up" subTitle="Register and eat" onBack={() => {}} />
            <View style={styles.container}>
                <View style={styles.photo}>
                    <View style={styles.borderPhoto} >
                        <View style={styles.photoContainer} >
                            <Text style={styles.addPhoto} >Add Photo</Text>
                        </View>
                    </View>
                </View>
                <TextInput label="Full Name" placeholder="Type your full name" />
                <Gap height={16} />
                <TextInput label="Email Address" placeholder="Type your email address" />
                <Gap height={16} />
                <TextInput label="Password" placeholder="Type your email password" />
                <Gap height={24} />
                <Button 
                    text="Continue" 
                    onPress={() => navigation.navigate('SignUpAddress')}
                />
            </View>
        </View>
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

