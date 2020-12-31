import React, { useEffect } from 'react'
import { StyleSheet, Text, View, Dimensions, ScrollView } from 'react-native'
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';
import { ItemListFood } from '..';
import { useNavigation } from '@react-navigation/native'
import { useDispatch, useSelector } from 'react-redux';
import { getInProgress, getPastOrders } from '../../../redux/action';

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

  const dispatch = useDispatch()

  const { inProgress } = useSelector( state => state.orderReducer )

  useEffect(() => {
    dispatch(getInProgress())
  }, [])

    return(
      <ScrollView>
        <View style={{ paddingTop: 8, paddingHorizontal: 24 }}>
        {inProgress.map(order => {
          return (
            <ItemListFood 
                  key={order.id}
                  image={{ uri: order.food.picturePath }}
                  name={order.food.name} 
                  onPress={() => navigation.navigate('OrderDetail', order)}
                  type="in-progress"
                  items={order.quantity}
                  price={order.total} />
          )
        })}
        </View>
      </ScrollView>
    )
}
   
const PastOrders = () => {
  const navigation = useNavigation()

  const dispatch = useDispatch()

  const { pastOrders } = useSelector( state => state.orderReducer )

  useEffect(() => {
    dispatch(getPastOrders())
  }, [])
    
  
    return(
      <View style={{ paddingTop: 8, paddingHorizontal: 24 }}>
        {pastOrders.map(order => {
          return (
            <ItemListFood 
            key={order.id}
            image={{ uri: order.food.picturePath }}
            items={order.quantity}
            name={order.food.name}
            price={order.total}
            type="past-orders"
            date={order.created_at}
            status={order.status} 
            onPress={() => navigation.navigate('OrderDetail', order) } />
          )
        })}
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
