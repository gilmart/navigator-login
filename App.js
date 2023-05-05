import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Image } from "react-native";
import HomeTabs from './screens/HomeTabs';

function HeaderLogo() {
  return <Image source={require('./assets/logo4.png')} style={{ width: 150, height: 63 }} />;
}

//DEFINIR LAS RUTAS DE CADA COMPONENTE
 const Stack = createNativeStackNavigator(); 

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='HomeTabs'>
        <Stack.Screen 
        name='HomeTabs' 
        component={HomeTabs} 
        options={{headerTitle: () => <HeaderLogo />,
        headerTitleAlign: 'center',
        headerStyle: {
          backgroundColor: '#EBCC04'
        }
      }}/>

   
      </Stack.Navigator>
    </NavigationContainer>
  );
}
