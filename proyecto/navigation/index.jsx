import React from "react";
import { View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "../login";
import Registro from "../registro";
import Bienvenido from "../bienvenido";

const MiNavegador = createNativeStackNavigator();

export const Logincontext = React.createContext({
  isloggedin: false,
  setIsLoggedIn: null,
});

const Navigator = () => {
  const [isloggedin, setIsLoggedIn] = React.useState(false);

  return (
    <Logincontext.Provider value={{ isloggedin, setIsLoggedIn }}>
      <NavigationContainer>
        <MiNavegador.Navigator>
          {isloggedin ? (
            <MiNavegador.Group>
              <MiNavegador.Screen name="Bienvenido" component={Bienvenido} />
            </MiNavegador.Group>
          ) : (
            <MiNavegador.Group>
              <MiNavegador.Screen name="Login" component={Login} />
              <MiNavegador.Screen name="Registro" component={Registro} />
            </MiNavegador.Group>
          )}
        </MiNavegador.Navigator>
      </NavigationContainer>
    </Logincontext.Provider>
  );
};

export default Navigator;
