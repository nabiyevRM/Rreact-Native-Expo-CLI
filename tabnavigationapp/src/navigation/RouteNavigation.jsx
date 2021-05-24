import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../screens/Home';
import Contact from '../screens/Contact';
import TabBar from '../components/navigation/TabBar';
import Search from '../screens/Search';

const Tab = createBottomTabNavigator();

const RouteNavigation = () =>{
    return(
        <Tab.Navigator tabBar={(props) => <TabBar {...props}/>}>
            <Tab.Screen name='Home' component={Home} initialParams={{icon:'home-outline'}}/>
            <Tab.Screen name='Contact' component={Contact} initialParams={{icon:'people-circle-outline'}}/>
            <Tab.Screen name='Search' component={Search} initialParams={{icon:'search-outline'}}/>
        </Tab.Navigator>
    )
}

export default RouteNavigation;