import { StatusBar } from "expo-status-bar";
import { StyleSheet, View, Picker } from "react-native";
import { Text, MyTextInput, MyBoton } from "./proyecto/components";
import { TextInput } from "react-native";
import React from "react";
import DropDownPicker from "react-native-dropdown-picker";
import Navigator from "./proyecto/navigation";
//import Registro from "./views/registro";

export default function App() {
  const [Correo, setCorreo] = React.useState("");
  const [Contraseña, setContraseña] = React.useState("");
  const [ConfiContraseña, setConfiContraseña] = React.useState("");
  const [TipoUsuario, setTipoUsuario] = React.useState("default");
  const [OnePicker, setOnePicker] = React.useState(false);
  const [PickerItems, setPickerItems] = React.useState([
    {
      label: "solicitante",
      value: "solicitante",
    },
    {
      label: "empleador",
      value: "empleador",
    },
  ]);

  const enviarFormulario = () => {
    if (Correo === "") {
      return alert("Necesita llenar el campo del Correo");
    }
    if (Contraseña === "") {
      return alert("Necesita llenar el campo de Contraseña");
    }
    if (ConfiContraseña === "") {
      return alert("Necesita llenar el campo de Confirmación de Contraseña");
    }
    if (ConfiContraseña != Contraseña) {
      return alert("Las contraseñas no son iguales");
    }else
    return alert("El formulario se ha llenado de manera correcta");
  };
  return (

    <Navigator/>
/*
    <View style={styles.container}>
      <Text>REGISTRO DE USUARIO</Text>
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
      <MyTextInput
        label="ConfiContraseña"
        place="Ingresa de nuevo tu contraseña"
        security
        value={ConfiContraseña}
        setValue={setConfiContraseña}
      />
      <DropDownPicker
        open={OnePicker}
        value={TipoUsuario}
        items={PickerItems}
        setOpen={setOnePicker}
        setValue={setTipoUsuario}
        setItems={setPickerItems}
      />
      <View style={styles.miBotonContener}>
        <MyBoton text="Registrarme" onPress={enviarFormulario} />
      </View>
    </View>  */
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#393C8F",
    flexDirection: "column",
    paddingHorizontal: 10,
    justifyContent: "space-evenly",
  },
  miBotonContener: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
});
