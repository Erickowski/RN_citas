import { StyleSheet } from "react-native"

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f3f4f6',
    flex: 1, // toma todo el espacio
  },
  title: {
    textAlign: 'center',
    fontSize: 30,
    color: '#374151',
    fontWeight: '600'
  },
  boldTitle: {
    fontWeight: '900',
    color: '#6d28d9'
  },
  btn: {
    newAppointment: {
      backgroundColor: '#6d28d9',
      padding: 15,
      marginTop: 20,
      marginHorizontal: 20,
      borderRadius: 10,
    },
    textNewAppointment: {
      textAlign: 'center',
      color: '#FFF',
      fontSize: 20,
      fontWeight: '900',
      textTransform: 'uppercase',
    }
  }
})

export default styles;