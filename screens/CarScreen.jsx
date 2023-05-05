import { Text, View, FlatList , Linking } from 'react-native';
import { TextInput, Button, Checkbox } from 'react-native-paper';
import {styles} from '../assets/styles/styles';
import React, { useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { CheckBox } from 'react-native-elements';
import { Icon } from 'react-native-vector-icons/FontAwesome';
import { rentarCarros } from './RentarCarrosScreen';
import { MaterialIcons } from '@expo/vector-icons';

export const  carrosRegistrados = []


export default function CarScreen({navigation}){
    const [mensajeError, setMensajeError ] = useState('');
    const [isChecked1, setIsChecked1] = useState(false);
    const [isChecked2, setIsChecked2] = useState(false);

    const {control, handleSubmit, formState: {errors}, reset} = useForm();

    const handleCheck = (value) => {
      if (value === 'disponible') {
        setIsChecked1(true);
        setIsChecked2(false);
      } else {
        setIsChecked1(false);
        setIsChecked2(true);
      }
    }

    
    const guardarCarro = (data) => {
      const carroExistente = carrosRegistrados.find((u) => u.platenumber === data.platenumber);
      if (carroExistente) {
        setMensajeError('El carro ya existe, por favor elige otro nombre de usuario');
      } else {
        const nuevoCarro = { 
          platenumber: data.platenumber, 
          brand: data.brand, 
          isChecked:  isChecked2, 
        };
        carrosRegistrados.push(nuevoCarro);
        setMensajeError('');
        reset();
        console.log(nuevoCarro)
        console.log(carrosRegistrados)


        navigation.navigate('CarrosGuardados', {carrosRegistrados});
      }
    };

    

    return(
      <View style={styles.container}>
      <Text style={styles.titulos}>Registro de Carros</Text>
      <Controller
        control={control}
        rules={{
          required: true,
        //  pattern:  /^[a-zA-Z0-9]+$/ ,
          pattern: /^(?=.*[a-zA-Z])(?=.*[0-9])[a-zA-Z0-9]+$/    ,
          maxLength:10,
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
            label="platenumber"

          />
        )}
        name="platenumber"
        defaultValue=""
      />
      {errors.platenumber?.type=="required" && <Text style={{ color: 'red' }}>El numero de placa es requerido</Text>}
     {errors.platenumber?.type=="pattern" && <Text style={{ color: 'red' }}>La placa debe incluir letras y numeros</Text>}
      {errors.platenumber?.type=="maxLength" && <Text style={{ color: 'red' }}>La placa solo debe incluir un max de 10 caracteres</Text>}
      {errors.platenumber?.type=="minLength" && <Text style={{ color: 'red' }}>La placa debe incluir un min de 2 caracteres</Text>}

      <Controller
        control={control}
        rules={{
          required: true,
          //pattern: /^[A-Za-z]+$/i,
          pattern: "^[a-zA-Z0-9]+$",
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
            label="brand"

            />
            )}
            name="brand"
            defaultValue=""
          />
           {errors.brand?.type=="required" && (<Text style={{ color: 'red' }}>La marca es requerido</Text>)}
          {errors.brand?.type=="pattern" && (<Text style={{ color: 'red' }}>La marca debe contener solo letras</Text>)}
           {errors.brand?.type=="maxLength" && <Text style={{ color: 'red' }}>La marca solo debe incluir un max de 20 caracteres</Text>}
          {errors.brand?.type=="minLength" && <Text style={{ color: 'red' }}>La marca debe incluir un min de 3 caracteres</Text>}
        
        <Controller
          control={control}
          rules={{
            validate: () => {
              return isChecked1 || isChecked2;
            }
          }}
          render={({ field: { onChange, value } }) => (
            <>
            <CheckBox
              checked={isChecked1}
              onPress={() => {
                setIsChecked1(true);
                setIsChecked2(false);
                onChange(true)
              }}
              title="disponible"
            />
            <CheckBox
              checked={isChecked2}
              onPress={() => {
                setIsChecked2(true);
                setIsChecked1(false);
                onChange(false);
                    }}
              title="no disponible"
            />
          </>
        )}
        name="isChecked"
        defaultValue={{ disponible: false, noDisponible: false }}
/>

          
         <Button 
          icon={() => <MaterialIcons name="login" color="#fff" size={24} />}
          style={styles.button}           
          mode="contained" 
          title="Guardar" 
          onPress={handleSubmit(guardarCarro)}>
          Guardar Carro
        </Button>
 
 
        </View>
        );
      }

