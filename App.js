import { useState } from "react";
import { Text, SafeAreaView, Pressable, FlatList } from "react-native";

import { Form, PatientItem } from "@Components";

import styles from "./styles";

export default function App() {
  const [showModal, setModalShow] = useState(false);
  const [patients, setPatients] = useState([]);
  const [patient, setPatient] = useState({});

  const toggleShowModal = () => {
    setModalShow((prevState) => !prevState);
  };

  const cleanPatient = () => {
    setPatient({});
  };

  const handleCloseModal = () => {
    toggleShowModal();
    cleanPatient();
  };

  const handleSetPatients = (patient) => {
    setPatients([...patients, patient]);
    toggleShowModal();
  };

  const handleUpdatePatients = (updatedPatient) => {
    const updatedPatients = patients.map((patient) =>
      patient.id === updatedPatient.id ? updatedPatient : patient
    );
    setPatients(updatedPatients);
    toggleShowModal();
  };

  const handleSelectPatient = (id) => {
    toggleShowModal();
    const selectedPatient = patients.find((patient) => patient.id === id);
    setPatient(selectedPatient);
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
          renderItem={({ item: patient }) => (
            <PatientItem {...patient} onSelectPatient={handleSelectPatient} />
          )}
          style={styles.patientList}
        />
      )}

      <Form
        showModal={showModal}
        selectedPatient={patient}
        onCloseModal={handleCloseModal}
        onSetPatients={handleSetPatients}
        onUpdatePatient={handleUpdatePatients}
      />
    </SafeAreaView>
  );
}
