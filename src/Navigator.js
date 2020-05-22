import React from 'react';
import { 
    createBottomTabNavigator,
} from '@react-navigation/bottom-tabs';
import {
    createStackNavigator
} from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/FontAwesome';

import Feed from './screens/Feed';
import AddPhoto from './screens/AddPhoto';
import Profile from './screens/Profile';
import Login from './screens/Login';
import Register from './screens/Register';
import Splash from './screens/Splash';

const Stack = createStackNavigator();

function MyStack(){
    return(
        <Stack.Navigator initialRouteName="Login">
            <Stack.Screen name="Profile" component={Profile}/>
            <Stack.Screen name="Login" component={Login}/>
            <Stack.Screen name="Register" component={Register}/>
        </Stack.Navigator>
    );
}

/*const loginOrProfileRouter = createSwitchNavigator({
    Profile: Profile,
    Auth: MyStack
}, {
    initialRouteName: 'Profile'
})*/

const Tab = createBottomTabNavigator();

function MyMenu(){
    return(
        <Tab.Navigator
            initialRouteName='Feed'
            tabBarOptions={{
                showLabel: false
            }}
        >
            <Tab.Screen 
                name='Feed' 
                component={Feed}        
                options={{
                    tabBarIcon: ({ color }) => (
                        <Icon name='home' size={30} color={color}/>
                    ),
                }}
            />

            <Tab.Screen 
                name='AddPhoto' 
                component={AddPhoto}
                options={{
                    tabBarIcon: ({ color }) => (
                        <Icon name='camera' size={30} color={color}/>
                    ),
                }}
            />

            <Tab.Screen 
                name='User' 
                component={MyStack}
                options={{
                    tabBarIcon: ({ color }) => (
                        <Icon name='user' size={30} color={color}/>
                    ),
                }}
            />
        </Tab.Navigator>
    )
}

function startStack(){
    return(
        <Stack.Navigator initialRouteName="Splash" screenOptions={{headerShown: false}}>
            <Stack.Screen name="Splash" component={Splash}/>
            <Stack.Screen name="App" component={MyMenu}/>
        </Stack.Navigator>
    );
}
export default startStack;