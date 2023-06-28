import { useState } from "react";
import { Text, SafeAreaView, Pressable, FlatList, Alert } from "react-native";

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

  const handleConfirmDeletePatient = (id) => {
    const updatedPatients = patients.filter((patient) => patient.id !== id);
    setPatients(updatedPatients);
  };

  const handleDeletePatient = (id) => {
    Alert.alert(
      "¿Deseas eliminar este paciente?",
      "Un paciente eliminado no se puede recuperar",
      [
        { text: "Cancelar" },
        {
          text: "Si, eliminar",
          onPress: () => handleConfirmDeletePatient(id),
        },
      ]
    );
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
            <PatientItem
              {...patient}
              onSelectPatient={handleSelectPatient}
              onDeletePatient={handleDeletePatient}
            />
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
