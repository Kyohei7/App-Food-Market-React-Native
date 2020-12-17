import React from 'react'
import { ScrollView, StyleSheet, View } from 'react-native'
import { FoodCard, Gap, HomeProfile, HomeTabSection } from '../../components'

const Home = () => {
    return (
        <ScrollView>
            <View style={styles.page} >
                <HomeProfile />
                <View>
                    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                        <View style={styles.foodCardContainer} >
                            <Gap width={24} />
                            <FoodCard />
                            <FoodCard />
                            <FoodCard />
                        </View>
                    </ScrollView>  
                </View>
                <View style={styles.tabContainer}>
                    <HomeTabSection />
                </View>
            </View>
        </ScrollView>
    )
}

export default Home

const styles = StyleSheet.create({
    page: {
        flex: 1
    },
    foodCardContainer: {
        flexDirection: 'row',
        marginVertical: 12,
    },
    tabContainer: {
        flex: 1
    }
})
