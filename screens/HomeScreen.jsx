import { Text, View, Linking } from 'react-native';
// import {styles} from '../assets/styles/styles';
import { TextInput, Button } from 'react-native-paper';
import { useState } from 'react';


export let users = [
    {usuario: 'tv', name:'Teresa Valencia', password:'11', role:1},
    {usuario: 'fz', name:'Faustino Zapata', password:'22', role:2},
  ]
  
  export default function HomeScreen({navigation}){
      const [usuario, setUsuario] = useState('');
      const [password, setPassword] = useState('');
      const [errormess, setErrormess] = useState('');
  
  
      return(
        <View >
          <Text style={{fontWeight:'bold', marginBottom:10}}>Inicio de Sesion</Text>
          <TextInput
            label="Usuario"
            mode="outlined"
            left={<TextInput.Icon icon="account"/>}
            onChangeText={usuario => setUsuario(usuario)}
            value={usuario}
          />
        <TextInput
          style={{ marginTop:10}} 
          label="Password"
          mode="outlined"
          right={<TextInput.Icon icon="eye"/>}
          onChangeText={password => setPassword(password)}
          value={password}
          secureTextEntry
        /> 

    <Button icon="login" 
        style={{ marginTop:10}} 
        mode="contained" 
        onPress={() =>{
          let fuser = users.find(usr => usr.usuario == usuario && usr.password == password);
          if (fuser != undefined){
            const {name, usuario} = fuser;
            navigation.navigate('Profile',{name:name, usuario:usuario})
            setErrormess('')
          }
          else{
            setErrormess('Usuario y/o password invalido(s)')
          }
        }}>
          Ingresar
        </Button>

<Text style={{color:'red'}}>{errormess}</Text>

   <Text>¿No estas registrado?</Text>
    <Text style={{color: 'blue'}}
      onPress={() => navigation.navigate('Registro')}>
        Registrate aqui
    </Text>

   </View>
   );
 }