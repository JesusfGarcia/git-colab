import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import { Text, MyTextInput, MyBoton } from "./components";
import { Pazanaya } from "./views/pazanaya";
import { Miri } from "./views/miri/miri";
import { Mayra } from "./views/mayra";
import { Karyrodriguez } from "./views/karyrodriguez";
import { EliDelMal } from "./views/eli";
import { Viripineda } from "./views/viripineda";
import { FridaGeyne } from "./views/FridaGeyne";
import { Belendiaz } from "./views/belendiaz";
import { Victoriam } from "./views/Victoria";
import { TextInput } from "react-native";
import React from "react";

const arraytorender = [
  <Pazanaya />,
  <Miri />,
  <Mayra />,
  <Karyrodriguez />,
  <EliDelMal />,
  <Viripineda />,
  <FridaGeyne />,
  <Belendiaz />,
  <Victoriam />,
];

export default function App() {
  const [Correo, setCorreo] = React.useState("")
  const [Contraseña, setContraseña] = React.useState("")

  const mostrarHolaMundo = () => alert("Hola mundo")

  const mostrarHolaMundo2 = () => {
    return alert("Hola mundo 2")
  }

  function mostrarHolaMundo3(){
    return alert("Hola mundo 3")
  }

  const enviarFormulario = () => {
    if(Correo === ""){
      return alert("Necesita llenar el campo del Correo")
    }if(Contraseña === ""){
      return alert("Necesita llenar el campo de Contraseña")
    }
    return alert("El formulario se ha llenado de manera correcta")
  }
  return (

    <View style={styles.container}>
      <MyTextInput label="Correo electrónico" place="Ingresa tu Correo Electrónico" value = {Correo} setValue = {setCorreo}/>
      <MyTextInput label="Contraseña" place="Ingresa tu Contraseña" security value = {Contraseña} setValue = {setContraseña}/>
      <View style={styles.miBotonContener}>
        <MyBoton text="aceptar"  onPress={enviarFormulario}/>
        <MyBoton text="aceptar2"  onPress={mostrarHolaMundo2}/>
        <MyBoton text="aceptar3"  onPress={mostrarHolaMundo3}/>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#337AFF",
    flexDirection: "column",
    padding: 10,
    justifyContent: "space-evenly"
  },
  ingresaTexto:{
    height: 40,
    borderColor: "#CF19E1"
  },
  miBotonContener: {
    flexDirection: "row",
    justifyContent: "space-between",
  }
});
