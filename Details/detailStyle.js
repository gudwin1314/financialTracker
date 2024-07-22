import { StyleSheet } from "react-native";

const detailStyles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#f5f5f5',
      padding: 16,
    },
    header: {
      backgroundColor: '#3b5998',
      padding: 16,
      borderRadius: 8,
      alignItems: 'center',
      marginBottom: 16,
    },
    amount: {
      fontSize: 24,
      color: '#fff',
      fontWeight: 'bold',
    },
    name: {
      fontSize: 18,
      color: '#fff',
    },
    location: {
      fontSize: 14,
      color: '#fff',
    },
    body: {
      backgroundColor: 'gray',
      padding: 16,
      borderRadius: 8,
    },
    label: {
      fontSize: 16,
      color: '#333',
    },
    value: {
      fontSize: 16,
      color: '#333',
      textAlign: 'right',
    },
  });
  export default detailStyles