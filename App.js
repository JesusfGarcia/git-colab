import { StatusBar } from "expo-status-bar";
import { StyleSheet, View, ActivityIndicator, Picker } from "react-native";
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
import DropDownPicker from "react-native-dropdown-picker";
import Icon from "react-native-vector-icons/FontAwesome"

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
  const [Contraseña, setContraseña] = React.useState(""); //estados
  const [Loading, setLoading] = React.useState(false);
  const [TipoUsuario, setTipoUsuario] = React.useState("default");
  const [OpenPicker, setOpenPicker] = React.useState(false);
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
    //<ListaUsuarios/>

    <View style={styles.container}>
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
      <DropDownPicker
        open={OpenPicker}
        value={TipoUsuario}
        items={PickerItems}
        setOpen={setOpenPicker}
        setValue={setTipoUsuario}
        setItems={setPickerItems}
      />
      <View style={styles.miBotonContener}>
        {Loading ? (
          <ActivityIndicator />
        ) : (
          <MyBoton text="aceptar" onPress={enviarFormulario} />
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#393C8F",
    flexDirection: "column",
    padding: 60,
    justifyContent: "space-evenly",
  },
  ingresaTexto: {
    height: 40,
    borderColor: "#CF19E1",
  },
  miBotonContener: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
});
