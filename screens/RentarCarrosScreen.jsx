import { Text, View, Linking, TouchableOpacity } from 'react-native';
import { TextInput, Button, Checkbox } from 'react-native-paper';
//import { useState } from 'react';
import React, { useState, useEffect } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { CheckBox } from 'react-native-elements';
import { Icon } from 'react-native-vector-icons/FontAwesome';
import {carrosRegistrados}  from './CarScreen';
import {usuariosRegistrados} from './RegistroScreen';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { MaterialIcons } from '@expo/vector-icons';
import {styles} from '../assets/styles/styles';


export const rentarCarros = [];

export default function RentarCarrosScreen({navigation}){
  const [selectedDate, setSelectedDate] = useState(new Date());

    const [errormess, setErrormess ] = useState('');
    const {control, handleSubmit, formState: {errors}, reset} = useForm();
    
    //Fecha
    const showDatePicker = () => {
      setDatePickerVisibility(true);
    };
  
    const hideDatePicker = () => {
      setDatePickerVisibility(false);
    };
  
    const handleConfirm = (date) => {
      setSelectedDate(date);
      hideDatePicker();

    };



    // logica del usuario para guardar
    const verificarUsuario = (data) => {
        
      const usuarioRegistrado = usuariosRegistrados.find((u) => u.usuario === data.usuario);
      const carroRegistrado = carrosRegistrados.find((u) => u.platenumber === data.platenumber)
      const carroRegistradoChecked = carrosRegistrados && carrosRegistrados.find((u) => u.isChecked === data.isChecked);

    if(usuarioRegistrado){
        console.log(usuariosRegistrados, 'arreglo usuario');

        if(carroRegistrado){
            console.log(carrosRegistrados, 'arreglo carro');

            if(carroRegistrado.isChecked === false){
                const nuevoCarroRentar = { 
                    usuario: data.usuario,
                    platenumber: data.platenumber, 
                    brand: data.brand,
                    isChecked: "no disponible", 
                    selectedDate: selectedDate,

                  };
                  rentarCarros.push(nuevoCarroRentar);
                  const index = carrosRegistrados.indexOf(carroRegistrado);
                  carrosRegistrados[index] = { ...carroRegistrado, isChecked: "no disponible", rentadoPor: data.usuario };
                  setErrormess('');
                  reset();
                 console.log(carroRegistrado.brand)
                 console.log(selectedDate)
                  navigation.navigate('CarrosGuardados', {rentarCarros});

            }else{
                setErrormess('Este carro no está disponible para rentar - gilma')
                console.log("El carro no está disponible - gilma");
            }
        }else{
            setErrormess('Este carro no está registrado')
            console.log("El carro no se encuentra registrado");
        }
    }else{
        setErrormess('Este usuario no está registrado')
        console.log('El usuario no está registrado')

    }    

    /*
      if (carroRegistrado){
        if (carroRegistrado.isChecked === false) {
            const nuevoCarroRentar = { 
                usuario: data.usuario,
                platenumber: data.platenumber, 
                isChecked:  data.isChecked, 
              };
              rentarCarros.push(nuevoCarroRentar);
              setErrormess('');
              reset();
             // console.log(nuevoCarroRentar)
              console.log(carrosRegistrados, 'guardó el registro')
        } 
        
        else {
            setErrormess('Este carro no está disponible para rentar')
            console.log("El carro no está disponible");
        }
      } 
      else {
        console.log("El carro no se encuentra registrado");
      }  
*/
      /*
        if(usuarioRegistrado){
            console.log(usuariosRegistrados, 'arreglo usuario');

            if(carroRegistrado){
            console.log(carrosRegistrados, 'arreglo carro');
               
                if(carroRegistradoChecked == "disponible"){
                    console.log(carroRegistrado, carroRegistradoChecked, 'imprimiendo carro registrado y estado - disponible')
                }
                }else{
                    console.log(carroRegistrado, carroRegistradoChecked, 'imprimiendo carro registrado y estado - no disponible')
                }
                    if(usuarioRegistrado && carroRegistrado ){
                        console.log("clickenado el boton")
                    }
                    else{
                        console.log('pendiente algo para la validacion del boton')
                    }
        }
                
            else{
                setErrormess('El carro no existe')
                console.log('El carro no existe consola')
            }
        }
        else{
            setErrormess('El usuario no existe')
             console.log('El usuario no existe consola')
        }
*/
      /*
      const carroRegistrado = carrosRegistrados.find((u) => u.platenumber === data.platenumber)

      if (usuarioRegistrado && carroRegistrado) {
        console.log(usuariosRegistrados, carroRegistrado, 'si existen');
      }else {
        setErrormess('El usuario-placa no existen')
        console.log('El usuario-placa no existen consola')
      }
*/
      }
    

    return(
      <View style={styles.container}>
      <Text style={styles.titulos}>Rentar Carros</Text>
         <Controller
        control={control}
        rules={{
          required: true,
        }}

        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            placeholder=""
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
            mode="outlined"
            label="usuario"
            theme={styles.theme}
            left={<TextInput.Icon icon="account"/>}
          />
        )}
        name="usuario"
        defaultValue=""
      />
      {errors.usuario?.type=="required" && <Text style={{ color: 'red' }}>El usuario es requerido</Text>}
      

<Controller
        control={control}
        rules={{
          required: true,
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            placeholder=""
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
            mode="outlined"
            label="platenumber"
            theme={styles.theme}
            left={<TextInput.Icon icon="account"/>}
          />
        )}
        name="platenumber"
        defaultValue=""
      />
      
      {errors.platenumber?.type=="required" && <Text style={{ color: 'red' }}>La placa es requerida</Text>}
     
      {/* --------  FECHA INPUT ------ */}
      
      <Calendar value={selectedDate} onChange={setSelectedDate} />


      <Text style={{color:'red'}}>{errormess}</Text>

       <Button 
          icon={() => <MaterialIcons name="login" color="#fff" size={24} />}
          style={styles.button}            
          mode="contained" 
          title="Rentar" 
          onPress={handleSubmit(verificarUsuario)}>
          Rentar Carro
        </Button>

        <Button 
        style={styles.buttonRentados} 
        icon=""
        mode="contained" 
        onPress={() =>{           
            navigation.navigate('CarrosGuardados',{rentarCarros})         
        }}>
         <Text style={styles.buttonText}>Carros Rentados</Text>
        </Button>

        <Button 
        style={styles.buttonGuardados} 
        icon=""
        mode="contained" 
        onPress={() =>{           
            navigation.navigate('CarrosGuardados',{carrosRegistrados})         
        }}>
         <Text style={styles.buttonText}>Carros Registrados</Text>
        </Button>




    
     

      </View>

    )};