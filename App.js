import { useState } from "react";
import { Text, SafeAreaView, Pressable } from "react-native";

import { Form } from "./components";

import styles from "./styles";

export default function App() {
  const [showModal, setModalShow] = useState(false);
  const [patients, setPatients] = useState([]);

  const toggleShowModal = () => {
    setModalShow((prevState) => !prevState);
  };

  const handleSetPatients = (patient) => {
    setPatients([...patients, patient]);
    toggleShowModal();
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Administrador de citas</Text>
      <Text style={[styles.title, styles.boldTitle]}>Veterinaria</Text>

      <Pressable onPress={toggleShowModal} style={styles.btn.newAppointment}>
        <Text style={styles.btn.textNewAppointment}>Nueva cita</Text>
      </Pressable>

      <Form
        showModal={showModal}
        onCloseModal={toggleShowModal}
        onSetPatients={handleSetPatients}
      />
    </SafeAreaView>
  );
}
