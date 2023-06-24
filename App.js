import { useState } from 'react'
import { Text, SafeAreaView, Modal, Pressable } from 'react-native';

import styles from './styles';

export default function App() {
  const [showModal, setModalShow] = useState(false);

  const handlePress = () => {
    setModalShow(true)
  };

  return (
    <SafeAreaView style={styles.container}>
        <Text style={styles.title}>Administrador de citas</Text>
        <Text style={[styles.title, styles.boldTitle]}>Veterinaria</Text>

        <Pressable onPress={handlePress} style={styles.btn.newAppointment}>
          <Text style={styles.btn.textNewAppointment}>Nueva cita</Text>
        </Pressable>

        <Modal visible={showModal} animationType='slide'>
          <Text>Modal</Text>
        </Modal>
    </SafeAreaView>
  );
}
