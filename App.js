import React from 'react';
import {  StyleSheet} from "react-native";
// import { NativeRouter, Route } from "react-router-native";
import ChatView from './screens/ChatView';
import HomeView from './screens/HomeView';
import Stories from './screens/Stories';

import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import LoginScreen from './screens/LoginScreen';

const Stack = createStackNavigator();
export default function App() {
  // const [message, setMessage] = React.useState([]);

 
  return (
    <NavigationContainer>
<Stack.Navigator >
<Stack.Screen name="Login" component={LoginScreen} />
</Stack.Navigator>
</NavigationContainer>
   
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 25,
    padding: 10
  },
  header: {
    fontSize: 20
  },
  nav: {
    flexDirection: "row",
    justifyContent: "space-around"
  },
  navItem: {
    flex: 1,
    alignItems: "center",
    padding: 10,
    backgroundColor:"red"
  },
  subNavItem: {
    padding: 5
  },
  topic: {
    textAlign: "center",
    fontSize: 15
  }
});
