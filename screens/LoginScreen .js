import React, { useState } from 'react'
import { View, StyleSheet } from 'react-native'
import { Input, Button } from 'react-native-elements'

 const LoginScreen =()=> {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
        return (
            <View style={styles.container}>
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
            onChangeText={text => setPassword(text)}
            secureTextEntry
            />
            <Button title="login" style={styles.button} />
            <Button title="register" style={styles.button} />
            </View>
            
        )
    
}

export default LoginScreen 

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