it [password, setPassword] = useState('');

  const handleLogin = () => {
    console.log(`Username: ${username}, Password: ${password}`);
    alert(`Bem vindo ${username}`)
  }

  return (
    <View style={estilo.container}>
      <TextInput
        style={estilo.input}
        placeholder="Usuário"
        value={username}
        onChangeText={setUsername}
      />
      <TextInput
        style={estilo.input}
        placeholder="Senha"
        secureTextEntry={true}
        value={password}
        onChangeText={setPassword}
      />
      <Button
        color="green"
        title="Entrar"
        onPress={handleLogin}
      />
    </View>
  );
};



export default Login;mport React, { useState } from 'react';
import { View, TextInput, Button } from 'react-native';
import estilo from '../styles/Styles';

const Login = () => {
  const [username, setUsername] = useState('');
  cons