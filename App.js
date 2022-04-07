import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import { Text, TextInput, TouchableOpacity } from "./components";
import { Pazanaya } from "./views/pazanaya";
import { Miri } from "./views/miri/miri";
import { Mayra } from "./views/mayra";
import { Karyrodriguez } from "./views/karyrodriguez";
import { EliDelMal } from "./views/eli";
import { Viripineda } from "./views/viripineda";
import { FridaGeyne } from "./views/FridaGeyne";
import { Belendiaz } from "./views/belendiaz";
import { Victoriam } from "./views/Victoria";
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

//El estilo de los textos se encuentra en la carpeta components/text.js
export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.vista1}>
        <Text>1</Text>
        <Text>2</Text>
        <Text>3</Text>
      </View>
      <View style={styles.vista2}>
        <TextInput />
        <TouchableOpacity>
          <Text>Soy un botón</Text>
        </TouchableOpacity>
        <Text>1</Text>
        <Text>2</Text>
        <Text>3</Text>
      </View>
      <View style={styles.vista3}>
        <Text>1</Text>
        <Text>2</Text>
        <Text>3</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
    flexDirection: "row",
  },
  vista1: {
    backgroundColor: "#3357FF",
    flex: 1,
    flexDirection: "column",
    justifyContent: "space-around", // de arriba hacia abajo
    alignItems: "center", // acomoda en el eje secundario
  },
  vista2: {
    backgroundColor: "#FFE033",
    flex: 2,
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "flex-end",
  },
  vista3: {
    backgroundColor: "#33EEFF",
    flex: 1,
    flexDirection: "column",
    justifyContent: "space-evenly",
  },
  text: {
    fontSize: 40,
  },
});
