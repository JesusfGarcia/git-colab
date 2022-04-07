import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import { Text } from "./components"
import { Pazanaya } from './views/pazanaya';
import { Miri } from './views/miri/miri';
import { Mayra } from './views/mayra';
import { Karyrodriguez } from './views/karyrodriguez';
import { EliDelMal } from './views/eli';
import { Viripineda } from './views/viripineda';
import { FridaGeyne } from './views/FridaGeyne';
import { Belendiaz } from './views/belendiaz';
import { Victoriam } from './views/Victoria';

const arraytorender=[ <Pazanaya/>, <Miri/>, <Mayra/>, <Karyrodriguez/>, <EliDelMal/>, <Viripineda/>, <FridaGeyne/>, <Belendiaz/>, <Victoriam/>];

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.vista1}>
        <Text style={styles.text}>1</Text>
        <Text style={styles.text}>2</Text>
        <Text style={styles.text}>3</Text>
      </View>
      <View style={styles.vista2}>
        <Text style={styles.text}>1</Text>
        <Text style={styles.text}>2</Text>
        <Text style={styles.text}>3</Text>
      </View>
      <View style={styles.vista3}>
        <Text style={styles.text}>1</Text>
        <Text style={styles.text}>2</Text>
        <Text style={styles.text}>3</Text>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    flexDirection: "row-reverse",
  },
  vista1: {
    backgroundColor: '#f08080',
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  vista2: {
    backgroundColor: '#e9ff33',
    flex: 2,
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "flex-end",
  },
  vista3: {
    backgroundColor:'#9033ff',
    flex: 1,
    flexDirection: "column",
    justifyContent: "space-evenly",
  },
  text: {
    fontSize: 40,
  }

});
