// import React from 'react'
// import { Text, View, StyleSheet, ScrollView } from 'react-native'
// import { Logo } from '../../assets'

// const SplashScreen = () => {
//     return(
//             <View style={styles.container}>
//                 <Logo />
//                 <Text style={styles.title} >FoodMarket</Text>
//             </View>             
//     )
// }

// export default SplashScreen

// const styles = StyleSheet.create({
//     container: {
//         backgroundColor: '#FFC700',
//         flex: 1,
//         alignItems: 'center', 
//         justifyContent: 'center', 
        
//     },
//     title: {
//         fontSize: 32, 
//         color: '#020202'
//     }
// })

import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Logo } from '../../assets'

export default function SplashScreen() {
    return (
        <View style={styles.container}>
                <Logo />
                <Text style={styles.title} >FoodMarket</Text>
        </View>  
    )
}

const styles = StyleSheet.create({
    container: {
                backgroundColor: 'red',
                flex: 1,
                alignItems: 'center', 
                justifyContent: 'center', 
                
            },
            title: {
                fontSize: 32, 
                color: '#020202',
                marginTop: 20
            }
    })

