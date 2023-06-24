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
            />
          </View>

          <View style={styles.field}>
            <Text style={styles.label}>Nombre Propietario</Text>
            <TextInput
              style={styles.input}
              placeholder="Nombre Propietario"
              placeholderTextColor={"#666"}
            />
          </View>

          <View style={styles.field}>
            <Text style={styles.label}>Email Propietario</Text>
            <TextInput
              style={styles.input}
              placeholder="Email Propietario"
              placeholderTextColor={"#666"}
              keyboardType="email-address"
            />
          </View>

          <View style={styles.field}>
            <Text style={styles.label}>Telefono Propietario</Text>
            <TextInput
              style={styles.input}
              placeholder="Telefono Propietario"
              placeholderTextColor={"#666"}
              keyboardType="number-pad"
            />
          </View>

          <View style={styles.field}>
            <Text style={styles.label}>Sintomas Paciente</Text>
            <TextInput
              style={styles.input}
              placeholder="Sintomas Paciente"
              placeholderTextColor={"#666"}
            />
          </View>
        </ScrollView>
      </SafeAreaView>
    </Modal>
  );
};
