import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import { Text, MyTextInput, MyBoton } from "./components";
import { TextInput } from "react-native";
import React from "react";
import Icon from "react-native-vector-icons/FontAwesome"

export default function App() {
  const [Correo, setCorreo] = React.useState("");
  const [Contraseña, setContraseña] = React.useState("");
  const [ConfContraseña, setConfContraseña] = React.useState("");

  const enviarFormulario = () => {
    if (Correo === "") {
      return alert("Necesita llenar el campo del Correo");
    }
    if (Contraseña === "") {
      return alert("Necesita llenar el campo de Contraseña");
    }
    if (ConfContraseña === "") {
      return alert("Necesita llenar el campo de Confirma tu Contraseña");
    }
    if (ConfContraseña != Contraseña) {
      return alert("Usuario y/o contraseña invalido");
    }else
    return alert("El formulario se ha llenado de manera correcta");



  };

  return (
    <View style={styles.container}>
      <Text>
        REGISTRO DE USUARIO
      </Text>

      

      <MyTextInput
        label="Correo electrónico"
        place="e.g. name@gmail.com"
        value={Correo}
        setValue={setCorreo}
      />
      
      <View style = {styles.theeye}>
      
      <MyTextInput
        label="Contraseña"
        place="Ingresa tu Contraseña"
        security
        value={Contraseña}
        setValue={setContraseña}
      />
      <Icon 
      size = {30}
      color = {"#000"}
      name = {"eye"}
       />
      </View>
      <MyTextInput
        label="Confirma tu Contraseña"
        place="Ingresa tu Contraseña de nuevo"
        security
        value={ConfContraseña}
        setValue={setConfContraseña}
        
      />
      <View style={styles.miBotonContener}>
        <MyBoton text="aceptar" onPress={enviarFormulario} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#393C8F",
    flexDirection: "column",
    paddingHorizontal: 60,
    justifyContent: "space-evenly",
  },

  theeye:{
    flexDirection: "row",
  },

  miBotonContener: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
});
