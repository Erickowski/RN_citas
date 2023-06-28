import { useState, useEffect } from "react";
import {
  SafeAreaView,
  Modal,
  Text,
  View,
  TextInput,
  ScrollView,
  Pressable,
  Alert,
} from "react-native";
import DatePicker from "@dietime/react-native-date-picker";

import { isObjectEmpty } from "@Utils";

import styles from "./styles";
import { INITIAL_STATE } from "./constants";

export const Form = ({
  showModal,
  onCloseModal,
  onSetPatients,
  selectedPatient,
  onUpdatePatient,
}) => {
  const [patientInfo, setPatientInfo] = useState(INITIAL_STATE);

  const handleChangePatientInfo = (e, property) => {
    setPatientInfo({
      ...patientInfo,
      [property]: e,
    });
  };

  const handleCreateAppointment = () => {
    const { name, ownerName, ownerEmail, date, symptoms } = patientInfo;
    if ([name, ownerName, ownerEmail, date, symptoms].includes("")) {
      Alert.alert("Error", "Todos los campos son obligatorios");
      return;
    }
    if (isObjectEmpty(selectedPatient)) {
      onSetPatients({ ...patientInfo, id: Date.now() });
    } else {
      onUpdatePatient(patientInfo);
    }
    cleanPatientInfo();
  };

  const cleanPatientInfo = () => {
    setPatientInfo(INITIAL_STATE);
  };

  useEffect(() => {
    if (!isObjectEmpty(selectedPatient)) {
      setPatientInfo(selectedPatient);
    } else {
      cleanPatientInfo();
    }
  }, [selectedPatient]);

  return (
    <Modal visible={showModal} animationType="slide">
      <SafeAreaView style={styles.container}>
        <ScrollView>
          <Text style={styles.title}>
            {isObjectEmpty(selectedPatient) ? "Nueva" : "Editar"}{" "}
            <Text style={styles.titleBold}>Cita</Text>
          </Text>

          <Pressable style={styles.cancelButton} onLongPress={onCloseModal}>
            <Text style={styles.cancelButtonText}>X Cancelar</Text>
          </Pressable>

          <View style={styles.field}>
            <Text style={styles.label}>Nombre Paciente</Text>
            <TextInput
              style={styles.input}
              placeholder="Nombre Paciente"
              placeholderTextColor={"#666"}
              value={patientInfo.name}
              onChangeText={(e) => handleChangePatientInfo(e, "name")}
            />
          </View>

          <View style={styles.field}>
            <Text style={styles.label}>Nombre Propietario</Text>
            <TextInput
              style={styles.input}
              placeholder="Nombre Propietario"
              placeholderTextColor={"#666"}
              value={patientInfo.ownerName}
              onChangeText={(e) => handleChangePatientInfo(e, "ownerName")}
            />
          </View>

          <View style={styles.field}>
            <Text style={styles.label}>Email Propietario</Text>
            <TextInput
              style={styles.input}
              placeholder="Email Propietario"
              placeholderTextColor={"#666"}
              keyboardType="email-address"
              value={patientInfo.ownerEmail}
              onChangeText={(e) =>
                handleChangePatientInfo(e.toLowerCase(), "ownerEmail")
              }
            />
          </View>

          <View style={styles.field}>
            <Text style={styles.label}>Telefono Propietario</Text>
            <TextInput
              style={styles.input}
              placeholder="Telefono Propietario"
              placeholderTextColor={"#666"}
              keyboardType="number-pad"
              maxLength={10}
              value={patientInfo.ownerPhone}
              onChangeText={(e) => handleChangePatientInfo(e, "ownerPhone")}
            />
          </View>

          <View style={styles.field}>
            <Text style={styles.label}>Fecha Alta</Text>
            <DatePicker
              date={patientInfo.date}
              onChange={(e) => handleChangePatientInfo(e, "date")}
              startYear={2023}
              fadeColor="#6d28d9"
              textColor="white"
            />
          </View>

          <View style={styles.field}>
            <Text style={styles.label}>Sintomas Paciente</Text>
            <TextInput
              style={[styles.input, styles.inputMultiline]}
              placeholder="Sintomas Paciente"
              placeholderTextColor={"#666"}
              multiline={true}
              numberOfLines={4}
              value={patientInfo.symptoms}
              onChangeText={(e) => handleChangePatientInfo(e, "symptoms")}
            />
          </View>

          <Pressable
            style={styles.newAppointmentButton}
            onPress={handleCreateAppointment}
          >
            <Text style={styles.newAppointmentButtonText}>
              {isObjectEmpty(selectedPatient) ? "Agregar" : "Editar"} Cita
            </Text>
          </Pressable>
        </ScrollView>
      </SafeAreaView>
    </Modal>
  );
};
