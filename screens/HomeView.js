import React from "react";
import {
  View,
  Text,
  StatusBar,
  StyleSheet,
  Image,
  Dimensions,
  ScrollView,
} from "react-native";
import { Link } from "react-router-native";

const HomeView = () => {
  return (
    <View style={{flex:1}}>
      <StatusBar
        animated={true}
        backgroundColor="#059DC0"
        style="auto"
        // barStyle={statusBarStyle}
        // showHideTransition={statusBarTransition}
        // hidden={hidden}
      />
        <Text style={styles.storiesTitle}>Stories</Text>

       
          <View style={{flexDirection:"row"}}>
              <ScrollView horizontal showsVerticalScrollIndicator={false}
  showsHorizontalScrollIndicator={false}>

            <View >
              <Image
                source={require("../assets/sj.jpg")}
                // fadeDuration={0}
                style={styles.storyImage}
                />
            </View>
            <View >
              <Image
                source={require("../assets/sj.jpg")}
                // fadeDuration={0}
                style={styles.storyImage}
                />
            </View>
            <View >
              <Image
                source={require("../assets/sj.jpg")}
                // fadeDuration={0}
                style={styles.storyImage}
                />
            </View>
            <View >
              <Image
                source={require("../assets/sj.jpg")}
                // fadeDuration={0}
                style={styles.storyImage}
                />
            </View>
            <View >
              <Image
                source={require("../assets/sj.jpg")}
                // fadeDuration={0}
                style={styles.storyImage}
                />
            </View>
            <View >
              <Image
                source={require("../assets/sj.jpg")}
                // fadeDuration={0}
                style={styles.storyImage}
                />
            </View>
            <View >
              <Image
                source={require("../assets/sj.jpg")}
                // fadeDuration={0}
                style={styles.storyImage}
                />
            </View>
            <View >
              <Image
                source={require("../assets/sj.jpg")}
                // fadeDuration={0}
                style={styles.storyImage}
                />
            </View>
            <View >
              <Image
                source={require("../assets/sj.jpg")}
                // fadeDuration={0}
                style={styles.storyImage}
                />
            </View>
            <View >
              <Image
                source={require("../assets/sj.jpg")}
                // fadeDuration={0}
                style={styles.storyImage}
                />
            </View>
            <View >
              <Image
                source={require("../assets/sj.jpg")}
                // fadeDuration={0}
                style={styles.storyImage}
                />
            </View>
            <View >
              <Image
                source={require("../assets/sj.jpg")}
                // fadeDuration={0}
                style={styles.storyImage}
                />
            </View>
            <View >
              <Image
                source={require("../assets/sj.jpg")}
                // fadeDuration={0}
                style={styles.storyImage}
                />
            </View>
            <View >
              <Image
                source={require("../assets/sj.jpg")}
                // fadeDuration={0}
                style={styles.storyImage}
                />
            </View>
            <View >
              <Image
                source={require("../assets/sj.jpg")}
                // fadeDuration={0}
                style={styles.storyImage}
                />
            </View>
           
                </ScrollView>
          </View>
       
    <View style={styles.chatList}>
      <Text style={styles.chatListTitle}>Chat</Text>
      <ScrollView>

         <View style={styles.chatListItem}>
         <Image
                source={require("../assets/sj.jpg")}
                // fadeDuration={0}
                style={styles.ListItemImage}
                />
                {/* <View to="/chat"> */}
                <View
          to="/chat"
          underlayColor="#f0f4f7"
          style={styles.navItem}
        >
      <Text style={styles.chatListItemName}>Scarlet Johansen</Text>
      <Text style={styles.chatListItemMessage}>Scarlet Johansen</Text>

                </View>
      </View>
         <View style={styles.chatListItem}>
         <Image
                source={require("../assets/sj.jpg")}
                // fadeDuration={0}
                style={styles.ListItemImage}
                />
                <View>
      <Text style={styles.chatListItemName}>Scarlet Johansen</Text>
      <Text style={styles.chatListItemMessage}> Scarlet JohansenScarlet JohansenScarlet Johansen </Text>

                </View>
      </View>
      </ScrollView>

      </View>
    </View>
  );
};

export default HomeView;

const styles = StyleSheet.create({
  storyImage: {
    width: 60,
    height: 60,
    marginHorizontal:5,
    borderColor: "#0074B7",
    borderWidth: 3,
    borderRadius:Math.round(Dimensions.get("window").width + Dimensions.get("window").height) / 2,
  },
  ListItemImage: {
    width: 60,
    height: 60,
    marginHorizontal:5,
    borderColor: "#fff",
    borderWidth: 1,
    borderRadius:Math.round(Dimensions.get("window").width + Dimensions.get("window").height) / 2,
  },
  storiesTitle:{
      fontSize:20,
      marginLeft:10,
      marginVertical:10
  },
  storiesBox: {
    //   flex:1,
    flexDirection: "row",
  },
  chatList:{
      flex:1,
     
      backgroundColor:"#0074B7",
      marginTop:20,
      borderTopRightRadius:30,
      borderTopLeftRadius:30
  },
  chatListTitle:{
      color:"#fff",
      fontSize:25,
      marginTop:8,
      marginLeft:15,
      marginBottom:5,
    //   backgroundColor:"red"
  },
  chatListItem:{

      flexDirection:"row",
      paddingVertical:10,
      borderBottomColor:"rgba(255,255,255,.1)",
      borderWidth:1,
      borderColor:0
  },
  chatListItemName:{
      color:"#fff",
      fontSize:20,
      marginTop:5
  },
  chatListItemMessage:{
      color:"#fff"
  }
});
