import { Text, SafeAreaView } from 'react-native';

import styles from './styles';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
        <Text style={styles.title}>Administrador de citas</Text>
        <Text style={[styles.title, styles.boldTitle]}>Veterinaria</Text>
    </SafeAreaView>
  );
}
