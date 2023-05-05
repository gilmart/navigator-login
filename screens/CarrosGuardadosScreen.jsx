import { Text, View, Button, FlatList } from 'react-native';
import {styles} from '../assets/styles/styles'
import {carrosRegistrados}  from './CarScreen'
import { rentarCarros } from './RentarCarrosScreen';

export default function CarrosGuardadosScreen({route}){
  //const { carrosRegistrados } = route.params;
  //const { rentarCarros} = route.params;
  
  const carrosRegistrados = route.params?.carrosRegistrados;
  const rentarCarros = route.params?.rentarCarros;
  
  return(
    <View style={styles.containerProfile}>
        <FlatList
          data={carrosRegistrados}
          renderItem={({ item }) => (
          <Text style={styles.parrafo}>
           {`Placa: ${item.platenumber}, 
          brand: ${item.brand}, 
          Disponibilidad: ${item.isChecked ? 'no disponible' : 'disponible'}`}
          
          </Text>
      )}
      keyExtractor={item => item.platenumber}
    />
    
  
     <FlatList
          data={rentarCarros}
          renderItem={({ item }) => (
        <Text style={styles.parrafo}>
          {`Usuario: ${item.usuario},
          Placa: ${item.platenumber}, 
          brand: ${item.brand}, 
          Disponibilidad: ${item.isChecked}.
          rentado para el dia: ${item.selectedDate.toLocaleDateString()}
          `}
          </Text>         
      )}
      keyExtractor={item => item.platenumber}
    />
    
      </View>

      
      
    );
    
  }
 
