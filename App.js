import { Text, SafeAreaView, Button, Pressable } from 'react-native';

import styles from './styles';

export default function App() {
  const handlePress = () => {
    console.log('hiciste click')
  };

  return (
    <SafeAreaView style={styles.container}>
        <Text style={styles.title}>Administrador de citas</Text>
        <Text style={[styles.title, styles.boldTitle]}>Veterinaria</Text>
        <Pressable onPress={handlePress} style={styles.btn.newAppointment}>
          <Text style={styles.btn.textNewAppointment}>Nueva cita</Text>
        </Pressable>
    </SafeAreaView>
  );
}
