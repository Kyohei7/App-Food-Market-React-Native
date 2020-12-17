import React from 'react'
import { StyleSheet, Text, View, Dimensions, Image, ScrollView } from 'react-native'
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';
import { ItemListFood } from '..';
import { FoodDummy1 } from '../../../assets';

const renderTabBar = props => (
    <TabBar
      {...props}
      indicatorStyle={{ 
          backgroundColor: '#020202',
          height: 3,
          width: '15%',
          marginLeft: '3%' }}
      style={{ backgroundColor: 'white' }}
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

const NewTaste = () => {
    return(
      <View style={{ paddingTop: 8 }}>
          <ItemListFood image={FoodDummy1} />
          <ItemListFood image={FoodDummy1} />
          <ItemListFood image={FoodDummy1} />
          <ItemListFood image={FoodDummy1} />
      </View>
    )
}
   
const SecondRoute = () => {
  return(
    <View style={{ paddingTop: 8 }}>
          <ItemListFood image={FoodDummy1} />
          <ItemListFood image={FoodDummy1} />
          <ItemListFood image={FoodDummy1} />
          <ItemListFood image={FoodDummy1} />
      </View>
  )
}
   
const initialLayout = { width: Dimensions.get('window').width };

const HomeTabSection = () => {

    const [index, setIndex] = React.useState(0);
    const [routes] = React.useState([
        { key: '1', title: 'New Taste' },
        { key: '2', title: 'Popular' },
        { key: '3', title: 'Recommended' },
    ]);
 
    const renderScene = SceneMap({
        1: NewTaste,
        2: SecondRoute,
        3: NewTaste,
    });

    return (
            <TabView
                    renderTabBar={renderTabBar}
                    navigationState={{ index, routes }}
                    renderScene={renderScene}
                    onIndexChange={setIndex}
                    initialLayout={initialLayout}
                />
    )
}

export default HomeTabSection

const styles = StyleSheet.create({

})
