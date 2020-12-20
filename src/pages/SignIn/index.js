import React, { useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Button, Gap, Header, TextInput } from '../../components'


const SignIn = ({navigation}) => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const onSubmit = () => {
        console.log('Email ', email)
        console.log('Password ', password)
    }

    return(
        <View style={styles.page} >
            <Header title="Sign In" subTitle="Find your best ever meal" />
            <View style={styles.container}>
                <TextInput 
                    label="Email Address" 
                    placeholder="Type your email address"
                    value={email}
                    onChangeText={(value) => setEmail(value)} />
                <Gap height={16} />
                <TextInput 
                    label="Password" 
                    placeholder="Type your email password"
                    value={password}
                    onChangeText={(value) => setPassword(value)}
                    secureTextEntry />
                <Gap height={24} />
                <Button text="Sign In" onPress={onSubmit}  />
                <Gap height={12} />
                <Button 
                    text="Create New Account" 
                    color='#8D92A3' 
                    textColor='white'
                    onPress={() => navigation.navigate('SignUp')}
                    />
            </View>
        </View>
    )
}

export default SignIn

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
    }
})