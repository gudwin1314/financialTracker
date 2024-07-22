import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#f5f5f5',
    },
    item: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: 16,
      borderBottomWidth: 1,
      borderBottomColor: '#ddd',
      backgroundColor: '#fff',
    },
    leftContainer: {
      flex: 1,
      flexDirection: 'column',
    },
    name: {
      fontSize: 16,
      color: '#333',
      marginBottom: 4,
      fontWeight: 'bold'
    },
    amount: {
      fontSize: 16,
      color: '#333',
    },
    arrow: {
      fontSize: 18,
      color: '#ccc',
    },
  });
  
  export default styles;