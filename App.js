import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import {Text} from "./components"
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

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.vista1}>
        <Text>1</Text>
        <Text>2</Text>
        <Text style= {styles.text}>3</Text>
      </View>
      <View style={styles.vista2}>
        <Text>1</Text>
        <Text style= {styles.text}>2</Text>
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
    backgroundColor: "#4633FF",
    flex: 1,
    flexDirection: "column",
    justifyContent: "space-around",
  },
  vista2: {
    backgroundColor: "#E8F609",
    flex: 2,
    flexDirection: "column",
    justifyContent: "space-around",
    alignItems: "center"
  },
  vista3: {
    backgroundColor: "#6F09F6",
    flex: 1,
    flexDirection: "column",
    justifyContent: "space-evenly",
    alignItems: "flex-end"
  },
  text: {
    fontSize: 40,
  }
});
