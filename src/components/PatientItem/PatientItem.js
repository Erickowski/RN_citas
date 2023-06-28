import { Text, View, Pressable } from "react-native";

import { formatDate } from "@Utils";

import styles from "./styles";

export const PatientItem = ({
  name,
  date,
  id,
  onSelectPatient,
  onDeletePatient,
  onShowModal,
  onShowPatientDetails,
}) => {
  const handleEditPatient = () => {
    onSelectPatient(id);
    onShowModal();
  };

  const handleDetailsPatient = () => {
    onSelectPatient(id);
    onShowPatientDetails();
  };

  return (
    <Pressable onLongPress={handleDetailsPatient}>
      <View style={styles.container}>
        <Text style={styles.label}>Paciente:</Text>
        <Text style={styles.text}>{name}</Text>
        <Text style={styles.date}>{formatDate(date)}</Text>

        <View style={styles.buttonsContainer}>
          <Pressable
            style={[styles.button, styles.editButton]}
            onLongPress={handleEditPatient}
          >
            <Text style={styles.textButton}>Editar</Text>
          </Pressable>

          <Pressable
            style={[styles.button, styles.deleteButton]}
            onLongPress={() => onDeletePatient(id)}
          >
            <Text style={styles.textButton}>Eliminar</Text>
          </Pressable>
        </View>
      </View>
    </Pressable>
  );
};
