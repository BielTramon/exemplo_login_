import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import Home from "./Home";
import Gerente from "./Gerente";
import Funcionario from "./Funcionario";
import Usuario from "./Usuario";
import Loja from "./Loja";

export function HomeTabs() {
  const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Gerente" component={Gerente} />
      <Tab.Screen name="Funcionario" component={Funcionario} />
      <Tab.Screen name="Usuario" component={Usuario} />
      <Tab.Screen name="Loja" component={Loja} />
    </Tab.Navigator>
  );
}

export default function App() {
  const Stack = createStackNavigator();
  return (
    <NavigationContainer screemOpitions={{ headerShown: false }}>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Gerente" component={Gerente} />
        <Stack.Screen name="Funcionario" component={Funcionario} />
        <Stack.Screen name="Usuario" component={Usuario} />
        <Stack.Screen name="Loja" component={Loja} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
