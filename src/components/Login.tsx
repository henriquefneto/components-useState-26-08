import { View, Button, TextInput, StyleSheet } from 'react-native'
import React from 'react'

export default function Login () {
  const [username, onChangeUsername] = React.useState('');
  const [password, onChangePassword] = React.useState('');

  const handleLogin = () => {
    console.log(username, password)
  }

  return (
    <View>
        <TextInput style={styles.input} onChangeText={onChangeUsername} value={username}/>
        <TextInput style={styles.input} onChangeText={onChangePassword} value={password} secureTextEntry/>
        <Button title='Confirm' onPress={handleLogin}/>
    </View>
  )
}

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});