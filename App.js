import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import { Text } from './components';
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
      <View style = {styles.vista1}>
        <Text>1</Text>
        <Text>2</Text>
        <Text>3</Text>
      </View>

      <View style = {styles.vista2}>
        <Text>1</Text>
        <Text>2</Text>
        <Text>3</Text>
      </View>

      <View style = {styles.vista3}>
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
    flexDirection:"row-reverse",
  },
  vista1:{
    backgroundColor: "#337AFF",
    flex: 1,
  },
  vista2:{
    backgroundColor: "#E9FF33",
    flex: 2,
  },
  vista3:{
    backgroundColor: "#9033FF",
    flex: 1,
  }
});
