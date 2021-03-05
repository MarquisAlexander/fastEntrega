import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';

import Login from './pages/Login';
import ResetPassword from './pages/ResetPassword';
import Dashboard from './pages/Dashboard/Completed';
import Pendents from './pages/Dashboard/Pendents';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

function TabNavigation() {
    return (
        <Tab.Navigator>
          <Tab.Screen name="Home" component={Dashboard} />
          <Tab.Screen name="Settings" component={Pendents} />
        </Tab.Navigator>
    );
  }

function Routes() {
    return (
        <NavigationContainer>
            <Stack.Navigator
                mode="modal"
                screenOptions={{
                    headerShown: false,
                }}
            >
                <Stack.Screen name="Login" component={Login} />
                <Stack.Screen name="ResetPassword" component={ResetPassword} />
                <Stack.Screen name="Dashboard" component={TabNavigation} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Routes;