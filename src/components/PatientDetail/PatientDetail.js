import { Modal, Text, Pressable, SafeAreaView } from "react-native";

import styles from "./styles";

export const PatientDetail = ({
  name,
  showPatientDetails,
  onClosePatientDetails,
}) => {
  console.log(name);
  return (
    <Modal visible={showPatientDetails} animationType="fade">
      <SafeAreaView>
        <Text>Detalle</Text>
        <Pressable onLongPress={onClosePatientDetails}>
          <Text>Cerrar modal</Text>
        </Pressable>
      </SafeAreaView>
    </Modal>
  );
};
