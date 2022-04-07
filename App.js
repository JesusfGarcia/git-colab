<<<<<<< HEAD
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
=======
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Pazanaya } from './views/pazanaya';
import { Miri } from './views/miri/miri';
import { Mayra } from './views/mayra';
import { Karyrodriguez } from './views/karyrodriguez';
import { EliDelMal } from './views/eli';
import { Viripineda } from './views/viripineda';
import { FridaGeyne } from './views/FridaGeyne';
import { Belendiaz } from './views/belendiaz';
import { Victoriam } from './views/Victoria';
const arraytorender=[ <Pazanaya/>, <Miri/>, <Mayra/>, <Karyrodriguez/>, <EliDelMal/>, <Viripineda/>, <FridaGeyne/>, <Belendiaz/>, <Victoria/>];
>>>>>>> a24ddb379f603d2e0bef4829fb57ae0c64f7c145

export default function App() {
  return (
    <View style={styles.container}>
      {arraytorender.map(componente => componente)}
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
