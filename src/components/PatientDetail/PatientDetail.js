import { Modal, Pressable, SafeAreaView, Text } from "react-native";

import styles from "./styles";

export const PatientDetail = ({
  name,
  showPatientDetails,
  onClosePatientDetails,
}) => {
  console.log(name);
  return (
    <Modal visible={showPatientDetails} animationType="fade">
      <SafeAreaView style={styles.container}>
        <Text style={styles.title}>
          Información <Text style={styles.titleBold}>Paciente</Text>
        </Text>

        <Pressable
          onLongPress={onClosePatientDetails}
          style={styles.closeButton}
        >
          <Text style={styles.closeButtonText}>X Cerrar</Text>
        </Pressable>

        <Text>{name}</Text>
      </SafeAreaView>
    </Modal>
  );
};
