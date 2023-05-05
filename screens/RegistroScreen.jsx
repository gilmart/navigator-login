import { Text, View, Linking } from 'react-native';
import {styles} from '../assets/styles/styles';
import { TextInput, Button } from 'react-native-paper';
import { useState, useEffect, React } from 'react';
import { TouchableOpacity } from 'react-native-web';
//import {usuariosArreglo as data} from '../usuariosArreglo.js'
import { useForm, Controller } from 'react-hook-form';
import { MaterialIcons } from '@expo/vector-icons';


  

export const usuariosRegistrados =[]

  export default  function RegistroScreen({ navigation }) {
  const [mensajeError, setMensajeError] = useState('');


  const { control, handleSubmit, formState: { errors }, reset} = useForm();
  

  const handleRegistro = (data) => {
    const usuarioExistente = usuariosRegistrados.find((u) => u.usuario === data.usuario);
    if (usuarioExistente) {
      setMensajeError('El usuario ya existe, por favor elige otro nombre de usuario');
    } else {
      const nuevoUsuario = { usuario: data.usuario, nombre: data.nombre, password: data.password };
      usuariosRegistrados.push(nuevoUsuario);
      setMensajeError('');
      reset();

      navigation.navigate('Home');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.titulos}>Registro</Text>
      <Controller
        control={control}
        rules={{
          required: true,
          pattern:  /^[a-zA-Z0-9]+$/ ,
          maxLength:10,
          minLength:2,

        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            placeholder=""
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
            theme={styles.theme}
            mode="outlined"
            label="Usuario"
            left={<TextInput.Icon icon="account"/>}


          />
          
        )}
        name="usuario"
        defaultValue=""
      />
      {errors.usuario?.type=="required" && <Text style={{ color: 'red' }}>El usuario es requerido</Text>}
      {errors.usuario?.type=="pattern" && <Text style={{ color: 'red' }}>El usuario solo debe incluir letras y numeros</Text>}
      {errors.usuario?.type=="maxLength" && <Text style={{ color: 'red' }}>El usuario solo debe incluir un max de 10 caracteres</Text>}
      {errors.usuario?.type=="minLength" && <Text style={{ color: 'red' }}>El usuario debe incluir un min de 2 caracteres</Text>}

      <Controller
        control={control}
        rules={{
          required: true,
          pattern: /^[a-zA-Z\s]+$/ ,
          maxLength:20,
          minLength:3,
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            placeholder=""
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
            theme={styles.theme}
            mode="outlined"
            label="nombre"
            left={<TextInput.Icon icon="group"/>}


            />
            )}
            name="nombre"
            defaultValue=""
          />
          {errors.nombre?.type=="required" && (<Text style={{ color: 'red' }}>El nombre es requerido</Text>)}
          {errors.nombre?.type=="pattern" && (<Text style={{ color: 'red' }}>El nombre debe contener solo letras</Text>)}
           {errors.nombre?.type=="maxLength" && <Text style={{ color: 'red' }}>El usuario solo debe incluir un max de 20 caracteres</Text>}
          {errors.nombre?.type=="minLength" && <Text style={{ color: 'red' }}>El usuario debe incluir un min de 3 caracteres</Text>}
        
          <Controller
            control={control}
            rules={{
              required: true,
              maxLength:20,
              minLength:3,
              pattern:  /^(?=.*[a-zA-Z])(?=.*[0-9])[a-zA-Z0-9]+$/,
            }}
            render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            placeholder=""
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
            theme={styles.theme}
            secureTextEntry={true}
            mode="outlined"
            label="password"
            left={<TextInput.Icon icon="key"/>}


          />
        )}
        name="password"
        defaultValue=""
      />
      {errors.password?.type=="required"  && <Text style={{ color: 'red' }}>La contraseña es requerida</Text>}
      {errors.password?.type=="pattern"  && <Text style={{ color: 'red' }}>La contraseña debe incluir letras y numeros</Text>}
      {errors.password?.type=="maxLength" && <Text style={{ color: 'red' }}>El usuario solo debe incluir un max de 20 caracteres</Text>}
      {errors.password?.type=="minLength" && <Text style={{ color: 'red' }}>El usuario debe incluir un min de 3 caracteres</Text>}
          
      
      <Button  
      icon={() => <MaterialIcons name="login" color="#fff" size={24} />}
      style={styles.button} 
      title="Registrarse" 
      onPress={handleSubmit(handleRegistro)}>
          <Text style={styles.buttonText}>Registrarse</Text>
      </Button>

      <Text style={styles.mensajesErrores}>{mensajeError}</Text>

      <Text>¿Ya tienes una cuenta?</Text>
        <Text style={{color: 'blue'}}
          onPress={() => navigation.navigate('Home')}>
            Inicia sesion aqui
      </Text>

    
    </View>
  );
}






    


/*
      const registrar = () =>{
         const nuevoUsuario={usuario,name,password};
         let buscarUsuarioRepetido = usuariosRegistrados.find(u => u.usuario == usuario)
         if(buscarUsuarioRepetido){
          setErrormess('nombre de usuario no disponible')
          console.log("usuario repetido")
         }
        else{
         usuariosRegistrados.push(nuevoUsuario) 
        setUsuario('');
        setName('');
        setPassword('');
        navigation.navigate('Home')
        }

        console.log(usuariosRegistrados,"lista de usuarios arreglo")

      };



      return(
        <View >
          <Controller
            control={control}
            rules={{
            required: true,
            maxLength:30,
            minLength:2,
            pattern:  /^[A-Za-zÑñÁÉÍÓÚáéíóú ]+$/g
            }}
            />
          <Text style={{fontWeight:'bold', marginBottom:10}}>Registro</Text>
          <TextInput
            label="Usuario"
            mode="outlined"
            left={<TextInput.Icon icon="account"/>}
            onChangeText={usuario => setUsuario(usuario)}
            value={usuario}
          />

         
          {errors.fullname?.type=='required' && <Text style={{color:'red'}}>El nombre completo es obligatorio</Text>}
      {errors.fullname?.type=='maxLength' && <Text style={{color:'red'}}>El nombre completo tiene un maximo de 30 chars</Text>}
      {errors.fullname?.type=='minLength' && <Text style={{color:'red'}}>El nombre completo tiene un minimo de 2 chars</Text>}
      {errors.fullname?.type=='pattern' && <Text style={{color:'red'}}>El nombre completo debe tener letras y/o espacios</Text>}
          
          
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
        onPress={registrar}>
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


Codigo good
  */

/*const newUsuario   = {
          usuario: usuario,
          name: name,
          password: password,
        };

        setUsuariosArreglo([...usuariosArreglo, newUsuario]);
        setUsuario('');
        setName('');
        setPassword('');*/

    
      //GUARDANDO REGISTROS //
       /*useEffect(()=>{
        setUsuariosArreglos(data)
       },[])
       
      
       
       const registrar=(opcion)=>{
        if(opcion=="Registrar"){
          if(usuario !=="" && name !== "" && password !== ""){
            guardar()
          }else setErrormess('Ingrese todos los')

        }
       }
        //funcion
        function guardar(usuarioArregloUsuario, usuarioArregloname, usuarioArregloPassword){
        setUsuariosArreglos([...usuariosArreglos, {
          usuario:usuarioArregloUsuario,
          name:usuarioArregloname,
          password:usuarioArregloPassword
        }])
      }
        console.log(usuariosArreglos+"12")

     //   guardar(usuario,name,password)
    */

    