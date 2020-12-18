import React from 'react'
import { StyleSheet, Text, View, Dimensions, Image, ScrollView } from 'react-native'
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';
import { ItemListFood } from '..';
import { FoodDummy1 } from '../../../assets';
import { useNavigation } from '@react-navigation/native'

const renderTabBar = props => (
    <TabBar
      {...props}
      indicatorStyle={{ 
          backgroundColor: '#020202',
          height: 3,
          width: '15%',
          marginLeft: '3%' }}
      style={{ 
          backgroundColor: 'white', 
          elevation: 0, 
          shadowOpacity: 0,
          borderBottomColor: '#F2F2F2',
          borderBottomWidth: 1 }}
      tabStyle={{ width: 'auto' }}
      renderLabel={({ route, focused, color }) => (
        <Text 
            style={{ 
                fontFamily: 'Poppins-Medium',
                color: focused ? '#020202' : '#8D92A3', }}>
          {route.title}
        </Text>
      )}
    />
  );

const InProgress = () => {
  const navigation = useNavigation()
    return(
      <View style={{ paddingTop: 8, paddingHorizontal: 24 }}>
          <ItemListFood 
              image={FoodDummy1}
              name="Mie Ayam Bakso" 
              onPress={() => navigation.navigate('FoodDetail')}
              type="in-progress"
              items={5}
              price="50.000" />
          <ItemListFood 
              image={FoodDummy1}
              name="Mie Ayam Pangsit" 
              onPress={() => navigation.navigate('FoodDetail')}
              type="in-progress"
              items={5}
              price="50.000" />
          <ItemListFood 
              image={FoodDummy1}
              name="Mie Ayam Kuah" 
              onPress={() => navigation.navigate('FoodDetail')}
              type="in-progress"
              items={5}
              price="50.000" />
          <ItemListFood 
              image={FoodDummy1}
              name="Mie Ayam Yamin" 
              onPress={() => navigation.navigate('FoodDetail')}
              type="in-progress"
              items={5}
              price="50.000" />
      </View>
    )
}
   
const PastOrders = () => {
  const navigation = useNavigation()
    return(
      <View style={{ paddingTop: 8, paddingHorizontal: 24 }}>
            <ItemListFood 
              image={FoodDummy1}
              name="Mie Ayam Bakso"
              type="past-orders"
              date="Jun 12, 14:00"
              status="Cancelled" 
              onPress={() => navigation.navigate('FoodDetail') } />
            <ItemListFood 
              image={FoodDummy1}
              name="Mie Ayam Bakso"
              type="past-orders"
              date="Jun 12, 14:00"
              status="Cancelled" 
              onPress={() => navigation.navigate('FoodDetail') } />
            <ItemListFood 
              image={FoodDummy1}
              name="Mie Ayam Bakso"
              type="past-orders"
              date="Jun 12, 14:00"
              status="Cancelled" 
              onPress={() => navigation.navigate('FoodDetail') } />
            <ItemListFood 
              image={FoodDummy1}
              name="Mie Ayam Bakso"
              type="past-orders"
              date="Jun 12, 14:00"
              status="Cancelled" 
              onPress={() => navigation.navigate('FoodDetail') } />
        </View>
    )
}


const initialLayout = { width: Dimensions.get('window').width };

const OrderTabSection = () => {

    const [index, setIndex] = React.useState(0);
    const [routes] = React.useState([
        { key: '1', title: 'In Progress' },
        { key: '2', title: 'Past Orders' },
    ]);
 
    const renderScene = SceneMap({
        1: InProgress,
        2: PastOrders,
    });

    return (
            <TabView
                    renderTabBar={renderTabBar}
                    navigationState={{ index, routes }}
                    renderScene={renderScene}
                    onIndexChange={setIndex}
                    initialLayout={initialLayout}
                    style={{ backgroundColor: 'white' }}
                />
    )
}

export default OrderTabSection

const styles = StyleSheet.create({

})
