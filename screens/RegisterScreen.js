import React from 'react'
import { useState } from 'react';
import { View,  StyleSheet } from 'react-native'
import { Input, Button } from 'react-native-elements'
import { auth } from '../firebase'

const RegisterScreen = ({navigation}) => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [imageUrl, setImageUrl] = useState('');
// React.useEffect(() => {
// const unsubscribe = auth.onAuthStateChanged(function (user) {
// if (user) {
// navigation.replace('Chat');
// } else {
// // No user is signed in.
// }
// });
// return unsubscribe;
// }, [])
const register = () => {
    auth.createUserWithEmailAndPassword(email, password)
    .then((userCredential) => {
    // Signed in
    var user = userCredential.user;
    user.updateProfile({
    displayName: name,
    photoURL: imageUrl ? imageUrl : "https://www.trackergps.com/canvas/images/icons/avatar.jpg"
    }).catch(function (error) {
    alert(error.message)
    });

    navigation.popToTop();
    // ...
    })
    .catch((error) => {
    var errorMessage = error.message;
    alert(errorMessage)
    });
    }
    return (
        <View style={styles.container}>
        <Input
        placeholder='Enter your name'
        label='Name'
        leftIcon={{ type: 'material', name: 'badge' }}
        value={name}
        onChangeText={text => setName(text)}
        />
        <Input
        placeholder='Enter your email'
        label='Email'
        leftIcon={{ type: 'material', name: 'email' }}
        value={email}
        onChangeText={text => setEmail(text)}
        />
        <Input
        placeholder='Enter your password'
        label='Password'
        leftIcon={{ type: 'material', name: 'lock' }}
        value={password} onChangeText={text => setPassword(text)}
        secureTextEntry
        />
        <Input
        placeholder='Enter your image url'
        label='Profile Picture'
        leftIcon={{ type: 'material', name: 'face' }}
        onChangeText={text => setImageUrl(text)}
        />
        <Button
        title="register" onPress={register} style={styles.button}
        />
        </View>
    )
}

export default RegisterScreen


const styles = StyleSheet.create({
    container: {
    flex: 1,
    alignItems: 'center',
    padding: 10
    },
    button: {
    width: 200,
    marginTop: 10
    }
    })