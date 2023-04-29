import { Text, View, Linking } from 'react-native';
// import {styles} from '../assets/styles/styles';
import { TextInput, Button } from 'react-native-paper';
import { useState, useEffect } from 'react';
import { TouchableOpacity } from 'react-native-web';
import { users as data } from './HomeScreen';


  
  export default function HomeScreen({navigation}){
      const [usuario, setUsuario] = useState('');
      const [name, setName] = useState('');
      const [password, setPassword] = useState('');
      const [errormess, setErrormess] = useState('');
      
      //arreglo//
      const [users, setUsers]  = useState([])

      //GUARDANDO REGISTROS //
     
      useEffect(()=>{
        setUsers(data)
      },[])

        function registrar(usersName, usersUsuario, usersPassword){
            setUsers([...users, {
                name: usersName,
                usuario: usersUsuario,
                password: usersPassword
            }])
        }
            registrar(name,usuario,password)
            console.log("clikc en registrar")
            console.log(users);
            console.log('la info es: ' + name, usuario,password)


       
    


  
      return(
        <View >
          <Text style={{fontWeight:'bold', marginBottom:10}}>Registro</Text>
          <TextInput
            label="Usuario"
            mode="outlined"
            left={<TextInput.Icon icon="account"/>}
            onChangeText={usuario => setUsuario(usuario)}
            value={usuario}
          />
          <TextInput
            label="Name"
            mode="outlined"
            left={<TextInput.Icon icon="star"/>}
            onChangeText={name => setName(name)}
            value={name}
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
        onPress={() =>{ registrar()}}>
          Registrate
        </Button>



<Text style={{color:'red'}}>{errormess}</Text>

   <Text>¿Ya estas registrado?</Text>
    <Text style={{color: 'blue'}}
      onPress={() => navigation.navigate('Home')}>
        Inicia Sesion aqui
    </Text>

   </View>
   );
    }