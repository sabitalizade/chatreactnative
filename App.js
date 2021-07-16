import React from 'react';
import { StyleSheet, Text, View, StatusBar ,Image,Dimensions,ScrollView,TextInput } from 'react-native';
import { AntDesign,MaterialCommunityIcons  } from '@expo/vector-icons'; 
export default function App() {
  const [text, onChangeText] = React.useState("Useless Text");
 
  return (
    <View style={styles.container}>
        <StatusBar
        animated={true}
        backgroundColor="#059DC0"
        // barStyle={statusBarStyle}
        // showHideTransition={statusBarTransition}
        // hidden={hidden} 
        />
      <View style={styles.topbar}>
      <AntDesign name="left" size={30} color="#fff" />
      <Image
        source={require('./assets/sj.jpg')}
        // fadeDuration={0}
        style={{ width: 40, height: 40, borderRadius: Math.round(Dimensions.get('window').width + Dimensions.get('window').height) / 2,}}
      />
      <Text style={styles.barName}>Sabit Alizade</Text>
      </View>
      <View  style={styles.mainView}>
      <ScrollView>
        <View style={styles.leftmessage}>
            <Text>{text} </Text>

        </View>
        <View style={styles.rightmessage}>
            <Text>recieved Message dfdd ffffffffffff ffffffffffff ffffffffffff fffffffffffffffff ffffffffffffffff fffffffffffffffffff fffffffffffffffff fffffffffffffff fffffffffff </Text>

        </View>
        <View style={styles.leftmessage}>
            <Text>{text} </Text>

        </View>
        <View style={styles.rightmessage}>
            <Text>recieved Message dfdd ffffffffffff ffffffffffff ffffffffffff fffffffffffffffff ffffffffffffffff fffffffffffffffffff fffffffffffffffff fffffffffffffff fffffffffff </Text>

        </View>
        <View style={styles.leftmessage}>
            <Text>{text} </Text>

        </View>
        <View style={styles.rightmessage}>
            <Text>recieved Message dfdd ffffffffffff ffffffffffff ffffffffffff fffffffffffffffff ffffffffffffffff fffffffffffffffffff fffffffffffffffff fffffffffffffff fffffffffff </Text>

        </View>
        <View style={styles.leftmessage}>
            <Text>{text} </Text>

        </View>
        <View style={styles.rightmessage}>
            <Text>recieved Message dfdd ffffffffffff ffffffffffff ffffffffffff fffffffffffffffff ffffffffffffffff fffffffffffffffffff fffffffffffffffff fffffffffffffff fffffffffff </Text>

        </View>
        <View style={styles.leftmessage}>
            <Text>{text} </Text>

        </View>
        <View style={styles.rightmessage}>
            <Text>recieved Message dfdd ffffffffffff ffffffffffff ffffffffffff fffffffffffffffff ffffffffffffffff fffffffffffffffffff fffffffffffffffff fffffffffffffff fffffffffff </Text>

        </View>
        <View style={styles.leftmessage}>
            <Text>{text} </Text>

        </View>
        <View style={styles.rightmessage}>
            <Text>recieved Message dfdd ffffffffffff ffffffffffff ffffffffffff fffffffffffffffff ffffffffffffffff fffffffffffffffffff fffffffffffffffff fffffffffffffff fffffffffff </Text>

        </View>
        <View style={styles.leftmessage}>
            <Text>{text} </Text>

        </View>
        <View style={styles.rightmessage}>
            <Text>recieved Message dfdd ffffffffffff ffffffffffff ffffffffffff fffffffffffffffff ffffffffffffffff fffffffffffffffffff fffffffffffffffff fffffffffffffff fffffffffff </Text>

        </View>
        <View style={styles.leftmessage}>
            <Text>{text} </Text>

        </View>
        <View style={styles.rightmessage}>
            <Text>recieved Message dfdd ffffffffffff ffffffffffff ffffffffffff fffffffffffffffff ffffffffffffffff fffffffffffffffffff fffffffffffffffff fffffffffffffff fffffffffff </Text>

        </View>
        <View style={styles.leftmessage}>
            <Text>{text} </Text>

        </View>
        <View style={styles.rightmessage}>
            <Text>recieved Message dfdd ffffffffffff ffffffffffff ffffffffffff fffffffffffffffff ffffffffffffffff fffffffffffffffffff fffffffffffffffff fffffffffffffff fffffffffff </Text>

        </View>
        <View style={styles.leftmessage}>
            <Text>{text} </Text>

        </View>
        <View style={styles.rightmessage}>
            <Text>recieved Message dfdd ffffffffffff ffffffffffff ffffffffffff fffffffffffffffff ffffffffffffffff fffffffffffffffffff fffffffffffffffff fffffffffffffff fffffffffff </Text>

        </View>
        <View style={styles.leftmessage}>
            <Text>{text} </Text>

        </View>
        <View style={styles.rightmessage}>
            <Text>recieved Message dfdd ffffffffffff ffffffffffff ffffffffffff fffffffffffffffff ffffffffffffffff fffffffffffffffffff fffffffffffffffff fffffffffffffff fffffffffff </Text>

        </View>
        <View style={styles.leftmessage}>
            <Text>{text} </Text>

        </View>
        <View style={styles.rightmessage}>
            <Text>recieved Message dfdd ffffffffffff ffffffffffff ffffffffffff fffffffffffffffff ffffffffffffffff fffffffffffffffffff fffffffffffffffff fffffffffffffff fffffffffff </Text>

        </View>
        <View style={styles.leftmessage}>
            <Text>{text} </Text>

        </View>
        <View style={styles.rightmessage}>
            <Text>recieved Message dfdd ffffffffffff ffffffffffff ffffffffffff fffffffffffffffff ffffffffffffffff fffffffffffffffffff fffffffffffffffff fffffffffffffff fffffffffff </Text>

        </View>
        <View style={styles.leftmessage}>
            <Text>{text} </Text>

        </View>
        <View style={styles.rightmessage}>
            <Text>recieved Message dfdd ffffffffffff ffffffffffff ffffffffffff fffffffffffffffff ffffffffffffffff fffffffffffffffffff fffffffffffffffff fffffffffffffff fffffffffff </Text>

        </View>
        <View style={styles.leftmessage}>
            <Text>{text} </Text>

        </View>
        <View style={styles.rightmessage}>
            <Text>recieved Message dfdd ffffffffffff ffffffffffff ffffffffffff fffffffffffffffff ffffffffffffffff fffffffffffffffffff fffffffffffffffff fffffffffffffff fffffffffff </Text>

        </View>
        <View style={styles.leftmessage}>
            <Text>{text} </Text>

        </View>
        <View style={styles.rightmessage}>
            <Text>recieved Message dfdd ffffffffffff ffffffffffff ffffffffffff fffffffffffffffff ffffffffffffffff fffffffffffffffffff fffffffffffffffff fffffffffffffff fffffffffff </Text>

        </View>
        <View style={styles.leftmessage}>
            <Text>{text} </Text>

        </View>
        <View style={styles.rightmessage}>
            <Text>recieved Message dfdd ffffffffffff ffffffffffff ffffffffffff fffffffffffffffff ffffffffffffffff fffffffffffffffffff fffffffffffffffff fffffffffffffff fffffffffff </Text>

        </View>
        <View style={styles.leftmessage}>
            <Text>{text} </Text>

        </View>
        <View style={styles.rightmessage}>
            <Text>recieved Message dfdd ffffffffffff ffffffffffff ffffffffffff fffffffffffffffff ffffffffffffffff fffffffffffffffffff fffffffffffffffff fffffffffffffff fffffffffff </Text>

        </View>
        <View style={styles.leftmessage}>
            <Text>{text} </Text>

        </View>
        <View style={styles.rightmessage}>
            <Text>recieved Message dfdd ffffffffffff ffffffffffff ffffffffffff fffffffffffffffff ffffffffffffffff fffffffffffffffffff fffffffffffffffff fffffffffffffff fffffffffff </Text>

        </View>
        <View style={styles.leftmessage}>
            <Text>{text} </Text>

        </View>
        <View style={styles.rightmessage}>
            <Text>recieved Message dfdd ffffffffffff ffffffffffff ffffffffffff fffffffffffffffff ffffffffffffffff fffffffffffffffffff fffffffffffffffff fffffffffffffff fffffffffff </Text>

        </View>
        <View style={styles.leftmessage}>
            <Text>{text} </Text>

        </View>
        <View style={styles.rightmessage}>
            <Text>recieved Message dfdd ffffffffffff ffffffffffff ffffffffffff fffffffffffffffff ffffffffffffffff fffffffffffffffffff fffffffffffffffff fffffffffffffff fffffffffff </Text>

        </View>
        <View style={styles.leftmessage}>
            <Text>{text} </Text>

        </View>
        <View style={styles.rightmessage}>
            <Text>recieved Message dfdd ffffffffffff ffffffffffff ffffffffffff fffffffffffffffff ffffffffffffffff fffffffffffffffffff fffffffffffffffff fffffffffffffff fffffffffff </Text>

        </View>
        <View style={styles.leftmessage}>
            <Text>{text} </Text>

        </View>
        <View style={styles.rightmessage}>
            <Text>recieved Message dfdd ffffffffffff ffffffffffff ffffffffffff fffffffffffffffff ffffffffffffffff fffffffffffffffffff fffffffffffffffff fffffffffffffff fffffffffff </Text>

        </View>
        <View style={styles.leftmessage}>
            <Text>{text} </Text>

        </View>
        <View style={styles.rightmessage}>
            <Text>recieved Message dfdd ffffffffffff ffffffffffff ffffffffffff fffffffffffffffff ffffffffffffffff fffffffffffffffffff fffffffffffffffff fffffffffffffff fffffffffff </Text>

        </View>
        <View style={styles.leftmessage}>
            <Text>{text} </Text>

        </View>
        <View style={styles.rightmessage}>
            <Text>recieved Message dfdd ffffffffffff ffffffffffff ffffffffffff fffffffffffffffff ffffffffffffffff fffffffffffffffffff fffffffffffffffff fffffffffffffff fffffffffff </Text>

        </View>
        <View style={styles.leftmessage}>
            <Text>{text} </Text>

        </View>
        <View style={styles.rightmessage}>
            <Text>recieved Message dfdd ffffffffffff ffffffffffff ffffffffffff fffffffffffffffff ffffffffffffffff fffffffffffffffffff fffffffffffffffff fffffffffffffff fffffffffff </Text>

        </View>
        <View style={styles.leftmessage}>
            <Text>{text} </Text>

        </View>
        <View style={styles.rightmessage}>
            <Text>recieved Message dfdd ffffffffffff ffffffffffff ffffffffffff fffffffffffffffff ffffffffffffffff fffffffffffffffffff fffffffffffffffff fffffffffffffff fffffffffff </Text>

        </View>
        <View style={styles.leftmessage}>
            <Text>{text} </Text>

        </View>
        <View style={styles.rightmessage}>
            <Text>recieved Message dfdd ffffffffffff ffffffffffff ffffffffffff fffffffffffffffff ffffffffffffffff fffffffffffffffffff fffffffffffffffff fffffffffffffff fffffffffff </Text>

        </View>
        <View style={styles.leftmessage}>
            <Text>{text} </Text>

        </View>
        <View style={styles.rightmessage}>
            <Text>recieved Message dfdd ffffffffffff ffffffffffff ffffffffffff fffffffffffffffff ffffffffffffffff fffffffffffffffffff fffffffffffffffff fffffffffffffff fffffffffff </Text>

        </View>
        <View style={styles.leftmessage}>
            <Text>{text} </Text>

        </View>
        <View style={styles.rightmessage}>
            <Text>recieved Message dfdd ffffffffffff ffffffffffff ffffffffffff fffffffffffffffff ffffffffffffffff fffffffffffffffffff fffffffffffffffff fffffffffffffff fffffffffff </Text>

        </View>
        </ScrollView>
        <View style={{flexDirection:"row"}}>
        <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        value={text}
      />
      <MaterialCommunityIcons name="send-circle-outline" size={50} color="black" />
        </View>
      </View>
     
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  input:{
    flex:1,
    backgroundColor:"#5885AF",
    borderRadius:20,
    marginLeft:5,    
    marginTop:5,    
    paddingVertical:6,
    paddingHorizontal:10
  },
  leftmessage:{
    backgroundColor:"#75E6DA",
    marginRight:20,
    marginLeft:5,
    marginBottom:5,
    paddingVertical:5,
    paddingHorizontal:5,
    borderRadius:10,
    borderTopLeftRadius:0

  },
  rightmessage:{
    backgroundColor:"#75E6DA",
    marginRight:5,
    marginLeft:20,
    marginBottom:5,
    paddingVertical:5,
    paddingHorizontal:5,
    borderRadius:10,
    borderTopRightRadius:0
  },
  topbar:{
    // flex:1,
    flexDirection:"row",
    height:50,
    backgroundColor:"#05445E",
    paddingHorizontal:3,
    alignItems:"center"
    
  },
  barName:{
    color:"#fff",
    marginLeft:5,
    fontSize:20
  },
  mainView:{
    flex:1,
    backgroundColor:"#189AB4",
    paddingVertical:5
  //  justifyContent:"center"
  }
});
