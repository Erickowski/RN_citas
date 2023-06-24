import { useState } from "react";
import {
  SafeAreaView,
  Modal,
  Text,
  View,
  TextInput,
  ScrollView,
} from "react-native";

import styles from "./styles";

export const Form = ({ showModal }) => {
  const [patientInfo, setPatientInfo] = useState({
    name: "",
    ownerName: "",
    ownerEmail: "",
    ownerPhone: "",
    symptoms: "",
  });

  const handleChangePatientInfo = (e, property) => {
    setPatientInfo({
      ...patientInfo,
      [property]: e,
    });
  };

  return (
    <Modal visible={showModal} animationType="slide">
      <SafeAreaView style={styles.container}>
        <ScrollView>
          <Text style={styles.title}>
            Nueva <Text style={styles.titleBold}>Cita</Text>
          </Text>

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
            <Text style={styles.label}>Sintomas Paciente</Text>
            <TextInput
              style={[styles.input, styles.input.multiline]}
              placeholder="Sintomas Paciente"
              placeholderTextColor={"#666"}
              multiline={true}
              numberOfLines={4}
              value={patientInfo.symptoms}
              onChangeText={(e) => handleChangePatientInfo(e, "symptoms")}
            />
          </View>
        </ScrollView>
      </SafeAreaView>
    </Modal>
  );
};
