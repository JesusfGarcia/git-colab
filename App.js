import { StatusBar } from "expo-status-bar";
import { Text, StyleSheet, View, ActivityIndicator, Image, Picker} from "react-native";
import { MyTextInput, MyBoton } from "./components";
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
import DropDownPicker from "react-native-dropdown-picker";
import Icon from "react-native-vector-icons/FontAwesome"

//import { ListaUsuarios } from "./views/listausuarios";

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

const ImgLogo = require("../git-colab/assets/logo.jpg")

export default function App() {
  const [Correo, setCorreo] = React.useState("");
  const [Contraseña, setContraseña] = React.useState("");
  const [ConfContra, setConfiContra] = React.useState("");
  const [Loading, setLoading] = React.useState(false);
 // const [PasswordVisible, setPasswordVisible]= React.useState(false)
 // const [Tipotarjeta, setTipoTarjeta] = React.useState("default")
 //const[OpenPicker, SetOpenPicker]= React.useState(false)
 // const[PickerItems, SetPickerItems]= React.useState([
 /*   {
      label:"solicitante",
      value:"solicitante",
    },
    {
      label: "empleador",
      value: "empleador",
    }
  ])*/




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
        "https://mymoneyhackademy.herokuapp.com/signup/",
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
   // <ListaUsuarios/>
   
    <View style={styles.container}>
      <Image 
        source= {ImgLogo}
        style= {styles.logoMoney}
      />
      <Text style={styles.ingresaTexto}> Registro</Text>
      <MyTextInput
        label="Correo electrónico"
        place="e.g. tu_nombre@mail.com"
        value={Correo}
        setValue={setCorreo}
      />
     
    
      <MyTextInput
        label="Contraseña"
        place="6-20 Caracteres 1Mayusc, 1Caracter, 1Núm."
        //security={!PasswordVisible}
        security
        value={Contraseña}
        setValue={setContraseña}
        //icon={PasswordVisible ?"eye-slash":"eye"}
        //onIconclick={() => setPasswordVisible(!PasswordVisible)}
      
      />
      

      
      <MyTextInput
        label="Confirmar Contraseña"
        place="Confirma Contraseña"
        security
        value={ConfContra}
        setValue={setConfiContra}
      />
    
      <View style={styles.miBotonContener}>
        {Loading ? (
          <ActivityIndicator />
        ) : (
          <MyBoton text="REGISTRATE" onPress={enviarFormulario} />
        )}
      </View>
    </View>


  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    flexDirection: "column",
    padding: 40,
    justifyContent: "space-evenly",
    fontSize: 5,
  },
  /*theeye: {
    flexDirection: "row",
    backgroundColor: "red",
    justifyContent: "space-between",

  },

  ojo: {
    backgroundColor: "blue",
  },*/
  ingresaTexto: {
    color: "#000",
    fontSize: 40,
    padding: -100,
    marginLeft: -15,
  },
  logoMoney: {
    height: 40,
    width: 130,
    alignSelf: "flex-end",
    margin: 10,
    
  },
  miBotonContener: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignSelf: "center",
  },
});
