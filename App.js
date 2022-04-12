import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import { Text, MyTextInput, MyBoton } from "./components";
import { TextInput } from "react-native";
import React from "react";

export default function App() {
  const [Correo, setCorreo] = React.useState("");
  const [Contraseña, setContraseña] = React.useState("");

  const enviarFormulario = () => {
    if (Correo === "") {
      return alert("Necesita llenar el campo del Correo");
    }
    if (Contraseña === "") {
      return alert("Necesita llenar el campo de Contraseña");
    }
    return alert("El formulario se ha llenado de manera correcta");
  };
  return (
    <View style={styles.container}>
      <Text>
        INICIAR SESIÓN
      </Text>
      <MyTextInput
        label="Correo electrónico"
        place="Ingresa tu Correo Electrónico"
        value={Correo}
        setValue={setCorreo}
      />
      <MyTextInput
        label="Contraseña"
        place="Ingresa tu Contraseña"
        security
        value={Contraseña}
        setValue={setContraseña}
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
  miBotonContener: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
});
