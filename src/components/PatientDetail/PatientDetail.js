import { Modal, Pressable, SafeAreaView, Text, View } from "react-native";

import { formatDate } from "@Utils";

import styles from "./styles";

export const PatientDetail = ({
  name,
  ownerName,
  ownerEmail,
  ownerPhone,
  date,
  symptoms,
  showPatientDetails,
  onClosePatientDetails,
}) => {
  return (
    <Modal visible={showPatientDetails} animationType="fade">
      <SafeAreaView style={styles.container}>
        <Text style={styles.title}>
          Información <Text style={styles.titleBold}>Paciente</Text>
        </Text>

        <View>
          <Pressable
            onLongPress={onClosePatientDetails}
            style={styles.closeButton}
          >
            <Text style={styles.closeButtonText}>X Cerrar</Text>
          </Pressable>
        </View>

        <View style={styles.fieldContainer}>
          <View style={styles.field}>
            <Text style={styles.label}>Nombre:</Text>
            <Text style={styles.value}>{name}</Text>
          </View>

          <View style={styles.field}>
            <Text style={styles.label}>Propietario:</Text>
            <Text style={styles.value}>{ownerName}</Text>
          </View>

          <View style={styles.field}>
            <Text style={styles.label}>Email:</Text>
            <Text style={styles.value}>{ownerEmail}</Text>
          </View>

          {ownerPhone ? (
            <View style={styles.field}>
              <Text style={styles.label}>Telefono:</Text>
              <Text style={styles.value}>{ownerPhone}</Text>
            </View>
          ) : null}

          <View style={styles.field}>
            <Text style={styles.label}>Fecha Alta:</Text>
            <Text style={styles.value}>{formatDate(date)}</Text>
          </View>

          <View style={styles.field}>
            <Text style={styles.label}>Sintomas:</Text>
            <Text style={styles.value}>{symptoms}</Text>
          </View>
        </View>
      </SafeAreaView>
    </Modal>
  );
};
