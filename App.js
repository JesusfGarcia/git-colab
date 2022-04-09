import { StatusBar } from "expo-status-bar";
import { StyleSheet, View, ActivityIndicator } from "react-native";
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
import axios from "axios";
import { ListaUsuarios } from "./views/listausuarios";

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
  const [Correo, setCorreo] = React.useState("");
  const [Contraseña, setContraseña] = React.useState("");
  const [ConfContra, setConfiContra] = React.useState("");
  const [Loading, setLoading] = React.useState(false);
  /* const mostrarBienvenida = () => alert("Bienvenido")

 const mostrarHolaMundo2 = () => {
    return alert("Hola mundo 2")
  }

  function mostrarHolaMundo3(){
    return alert("Hola mundo 3")
  } */

  const enviarFormulario = () => {
    if (Correo === "") {
      return alert("Necesita llenar el campo del Correo");
    }
    if (Contraseña === "") {
      return alert("Necesita llenar el campo de Contraseña");
    }
    if (ConfContra != Contraseña) {
      return alert("Verificar contraseña");
    }
    enviarUsuario();
  };
  const enviarUsuario = async () => {
    try {
      setLoading(true);
      const response = await axios.post(
        "https://mymoney15.herokuapp.com/api/v1/users",
        { email: Correo, password: Contraseña }
      );
      console.log(response);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.error(error);
    }
  };
  return (
    <ListaUsuarios/>
    // <View style={styles.container}>
    //   <Text> Registro </Text>
    //   <MyTextInput
    //     label="Correo electrónico"
    //     place="e.g. name@mail.com"
    //     value={Correo}
    //     setValue={setCorreo}
    //   />
    //   <MyTextInput
    //     label="Contraseña"
    //     place="6-20 caracteres 1Mayusc, 1 caract, 1 num"
    //     security
    //     value={Contraseña}
    //     setValue={setContraseña}
    //   />
    //   <MyTextInput
    //     label="Confirmar Contraseña"
    //     place="Confirma Contraseña"
    //     security
    //     value={ConfContra}
    //     setValue={setConfiContra}
    //   />
    //   <View style={styles.miBotonContener}>
    //     {Loading ? (
    //       <ActivityIndicator />
    //     ) : (
    //       <MyBoton text="GUARDAR" onPress={enviarFormulario} />
    //     )}
    //   </View>
    // </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    flexDirection: "column",
    padding: 35,
    justifyContent: "space-evenly",
    fontSize: 35,
  },
  ingresaTexto: {
    height: 40,
    borderColor: "red",
  },
  miBotonContener: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignSelf: "center",
  },
});
