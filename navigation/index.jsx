import React from "react";
import { View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "../views/login";
import Registro from "../views/registro";
import Bienvenida from "../views/bienvenida";

const Minavegador = createNativeStackNavigator();

export const Logincontext = React.createContext({
  isloggedin: false,
  setIsLoggedIn: null,
});

const Navigator = () => {
  const [isloggedin, setIsLoggedIn] = React.useState(false);
  return (
    <Logincontext.Provider value={{isloggedin, setIsLoggedIn}}>
      <NavigationContainer>
        <Minavegador.Navigator>
          {isloggedin ? (
            <Minavegador.Group>
              <Minavegador.Screen name="Bienvenida" component={Bienvenida} />
            </Minavegador.Group>
          ) : (
            <Minavegador.Group>
              <Minavegador.Screen name="Login" component={Login} />
              <Minavegador.Screen name="Registro" component={Registro} />
            </Minavegador.Group>
          )}
        </Minavegador.Navigator>
      </NavigationContainer>
    </Logincontext.Provider>
  );
};
export default Navigator;
