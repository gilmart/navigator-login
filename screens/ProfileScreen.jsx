import { Text, View } from 'react-native';
import {styles} from '../assets/styles/styles'
import { usuariosRegistrados } from './HomeScreen';
import { TextInput, Button } from 'react-native-paper';



function ProfileScreen({route,navigation}){

 //const{ name, usuario}= route.params;
const name = route.params?.name; 
const usuario = route.params?.usuario; // null check con ?.


  return(
    <View style={styles.containerProfile}>
       <Text style={styles.titulosProfile}>
       {usuario ? `Bienvenido, ${usuario}` : 'Bienvenido'}
        </Text>
          <Text style={styles.parrafo}> ¿Que deseas hacer hoy? </Text>
          
          <Button 
        style={styles.button} 
        icon=""
        mode="contained" 
        onPress={() =>{           
            navigation.navigate('Car')         
        }}>
         <Text style={styles.buttonText} >Registrar un carro</Text>
        </Button>

        <Button 
        style={styles.button} 
        icon=""
        mode="contained" 
        onPress={() =>{           
            navigation.navigate('RentarCarros')         
        }}>
         <Text style={styles.buttonText} >Rentar Carro</Text>
        </Button>


      </View>
    );
  }
 
 export default ProfileScreen 