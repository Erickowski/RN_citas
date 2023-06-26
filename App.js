import { useState } from "react";
import { Text, SafeAreaView, Pressable, FlatList } from "react-native";

import { Form, PatientItem } from "./components";

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

      {!patients.length ? (
        <Text style={styles.noPatients}>No hay pacientes</Text>
      ) : (
        <FlatList
          data={patients}
          keyExtractor={(patient) => patient.id}
          renderItem={({ item: patient }) => <PatientItem {...patient} />}
          style={styles.patientList}
        />
      )}

      <Form
        showModal={showModal}
        onCloseModal={toggleShowModal}
        onSetPatients={handleSetPatients}
      />
    </SafeAreaView>
  );
}
