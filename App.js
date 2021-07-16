import React from 'react';
import { StatusBar, StyleSheet, Text, View } from "react-native";
import { NativeRouter, Route, Link } from "react-router-native";
import ChatView from './screens/ChatView';
import HomeView from './screens/HomeView';


export default function App() {
  
 
  return (
    <NativeRouter>
       {/* <StatusBar
        animated={true}
        backgroundColor="#059DC0"
        style="auto"
        // barStyle={statusBarStyle}
        // showHideTransition={statusBarTransition}
        // hidden={hidden} 
        />
    <View style={styles.container}>
      <View style={styles.nav}>
        <Link to="/" underlayColor="#f0f4f7" style={styles.navItem}>
          <Text>Home</Text>
        </Link>
        <Link
          to="/chat"
          underlayColor="#f0f4f7"
          style={styles.navItem}
        >
          <Text>About</Text>
        </Link>
        <Link
          to="/topics"
          underlayColor="#f0f4f7"
          style={styles.navItem}
        >
          <Text>Topics</Text>
        </Link>
      </View> */}

      <Route exact path="/" component={HomeView} />
      <Route path="/chat" component={ChatView} />
      {/* <Route path="/topics" component={Topics} /> */}
    {/* </View> */}
  </NativeRouter>
   
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
