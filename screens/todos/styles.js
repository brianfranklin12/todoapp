import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  fab: {
    position: 'absolute',
    margin: 16,
    right: 0,
    bottom: 0,
    backgroundColor: '#c7c7c7'
  },
  field: {
    marginTop: 10,
    padding: 10,
  },
  errorMessage: {
    margin: 10
  },
  errorText: {
    color: 'red'
  },
  notComplete: {
    margin: 5,
  },
  complete: {
    color: 'grey',
    textDecorationLine: 'line-through',
    margin: 5,
  }
})

export default styles;