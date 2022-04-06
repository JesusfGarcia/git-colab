import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Pazanaya } from './views/pazanaya';
import { Miri } from './views/miri/miri';
import { Mayra } from './views/mayra';
import { Karyrodriguez } from './views/karyrodriguez';
import { EliDelMal } from './views/eli';

const arraytorender=[ <Pazanaya/>, <Miri/>, <Mayra/>, <Karyrodriguez/>, <EliDelMal/>]

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
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
