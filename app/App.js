import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Image } from 'react-native';
import Meucomponente from './components/Meucomponente';
import NumeroAleatorio from './components/NumeroAleatorio';

export default function App() {
  return (
    <View style={styles.container}>
      
      <NumeroAleatorio min={2} max={10} />
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
