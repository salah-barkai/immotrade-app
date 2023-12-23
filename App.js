// App.js
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Connexion from './screens/connexion';
import Pub from './screens/pub';
import InscriptionScreen from './screens/inscription';
import Profile from './screens/profile';
import Home from './screens/home';
import PublicationForm from './screens/publication'


const Stack = createStackNavigator();
const Tab = createMaterialBottomTabNavigator();

const MainTabs = ({route}) => {
  const {username} = route.params;
  
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={Home}  options={{ headerShown: false,   tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="home" color={color} size={26} />), }}/>
      <Tab.Screen name="Profiles" component={Profile} initialParams={{ username: username}}
           options={{ headerShown: false, tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="account" color={color} size={26} />),}} />
      <Tab.Screen name="Publications" component={Pub} options={{ headerShown: false,  tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="bell" color={color} size={26} />), }}/>
    </Tab.Navigator>
  );
};

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Connexion" options={{ headerShown: false }}>
        <Stack.Screen name="PublicationForm" component={PublicationForm} options={{ headerShown: false }} />
        <Stack.Screen name="Connexion" component={Connexion} options={{ headerShown: false }} />
        <Stack.Screen name="Inscription" component={InscriptionScreen} options={{ headerShown: false }}/>
        <Stack.Screen name="Main" component={MainTabs} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
