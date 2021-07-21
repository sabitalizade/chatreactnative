import React from "react";
import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  Image,
  Dimensions,
  ScrollView,
  TextInput,
} from "react-native";
import { AntDesign, MaterialCommunityIcons } from "@expo/vector-icons";
import { Link } from "react-router-native";
const ChatView = ({message, setMessage}) => {
  const [text, onChangeText] = React.useState();
  const messagesEndRef = React.useRef(null);
  const sendMessage = (e) => {
    setMessage([
      ...message,
      {
        author: 1,
        message: text,
      },
    ]);
    onChangeText("");
  };

  // setInterval(() => {
  //   setMessage([...message,{
  //     author:0,
  //     message:"salam"
  //   }])
  // }, 5000);
  // const scrollToBottom = () => {
  //   messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  //   }

  //   React.useEffect(() => {
  //     scrollToBottom()
  // }, [message])

  return (
    <View style={styles.container}>
      <StatusBar
        animated={true}
        backgroundColor="#000"
        style="auto"
        // barStyle={statusBarStyle}
        // showHideTransition={statusBarTransition}
        // hidden={hidden}
      />

      <View style={styles.topbar}>
        <Link to="/">
          <AntDesign name="left" size={30} color="#fff" />
        </Link>
        <Image
          source={require("../assets/sj.jpg")}
          // fadeDuration={0}
          style={{
            width: 40,
            height: 40,
            borderRadius:
              Math.round(
                Dimensions.get("window").width + Dimensions.get("window").height
              ) / 2,
          }}
        />
        <Text style={styles.barName}>Sabit Alizade</Text>
      </View>
      <View style={styles.mainView}>
        <ScrollView
        // ref={ref => }
        ref={messagesEndRef}  
        onContentSizeChange={() => messagesEndRef.current.scrollToEnd({ animated: true })}
        >
          {message.map((item, id) => (
            <View
              key={id}
              style={
                item.author == 0 ? styles.leftmessage : styles.rightmessage
              }
             
            >
              <Text style={styles.messageText}>{item.message} </Text>
            </View>
          ))}
        </ScrollView>
        <View style={{ flexDirection: "row" }}>
          <TextInput
            style={styles.input}
            onChangeText={onChangeText}
            placeholder="Type message"
            value={text}
          />
          <MaterialCommunityIcons
            name="send-circle-outline"
            size={50}
            color="#fff"
            onPress={sendMessage}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  input: {
    flex: 1,
    backgroundColor: "#444",
    borderRadius: 20,
    marginLeft: 5,
    marginTop: 5,
    paddingVertical: 6,
    paddingHorizontal: 10,
    color: "#fff",
  },
  leftmessage: {
    backgroundColor: "#999",

    marginRight: 20,
    marginLeft: 5,
    marginBottom: 5,
    paddingVertical: 5,
    paddingHorizontal: 5,
    borderRadius: 10,
    borderTopLeftRadius: 0,
  },
  messageText: {
    color: "#fff",
  },
  rightmessage: {
    backgroundColor: "#666",
    marginRight: 5,
    flex: 1,
    marginLeft: 20,
    marginBottom: 5,
    paddingVertical: 5,
    paddingHorizontal: 5,
    borderRadius: 10,
    borderTopRightRadius: 0,
  },
  topbar: {
    // flex:1,
    flexDirection: "row",
    height: 50,
    backgroundColor: "#000",
    paddingHorizontal: 3,
    alignItems: "center",
  },
  barName: {
    color: "#fff",
    marginLeft: 5,
    fontSize: 20,
  },
  mainView: {
    flex: 1,
    backgroundColor: "#333",
    paddingVertical: 5,
    //  justifyContent:"center"
  },
});

export default ChatView;
