import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { Pazanaya } from "./views/pazanaya";
import { Miri } from "./views/miri/miri";
import { Mayra } from "./views/mayra";
import { Karyrodriguez } from "./views/karyrodriguez";
import { EliDelMal } from "./views/eli";
import { Viripineda } from "./views/viripineda";
import { FridaGeyne } from "./views/FridaGeyne";
import { Belendiaz } from "./views/belendiaz";
import { Victoriam } from "./views/Victoria";
import AndroidHorizontalScrollContentViewNativeComponent from "react-native/Libraries/Components/ScrollView/AndroidHorizontalScrollContentViewNativeComponent";
const arraytorender = [
  <Pazanaya />,
  <Miri />,
  <Mayra />,
  <Karyrodriguez />,
  <EliDelMal />,
  <Viripineda />,
  <FridaGeyne />,
  <Belendiaz />,
  <Victoria />,
];

export default function App() {
  return (
    <>
      <View style={styles.container}>
        {arraytorender.map((componente) => componente)}
        <StatusBar style="auto" />
      </View>
      <View style={styles.vista1}>
        <Text style={styles.text}>This is</Text>
        <Text style={styles.text}>la vista</Text>
        <Text style={styles.text}>no. 1</Text>
      </View>
      <View style={styles.vista2}>
        <Text style={styles.text}>This is</Text>
        <Text style={styles.text}>la vista</Text>
        <Text style={styles.text}>no. 2</Text>
      </View>
      <View style={styles.vista3}>
        <Text style={styles.text}>This is</Text>
        <Text style={styles.text}>la vista</Text>
        <Text style={styles.text}>no. 3</Text>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    flexDirection: "row",
  },
  vista1: {
    flex: 1,
    backgroundColor: "#b5e7b2",
  },
  vista2: {
    flex: 1.5,
    backgroundColor: "#f8a6d3",
  },
  vista3: {
    flex: 1,
    backgroundColor: "#c5d3c2",
  },
  text: {
    fontSize: 40,
    color: "#520671"
  }
});
