import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";


import HomeTabs from './screens/HomeTabs';


//DEFINIR LAS RUTAS DE CADA COMPONENTE
 const Stack = createNativeStackNavigator(); 

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='HomeTabs'>
        <Stack.Screen name='HomeTabs' component={HomeTabs} options={{title:'Sistema Demo'}}/>

   
      </Stack.Navigator>
    </NavigationContainer>
  );
}
