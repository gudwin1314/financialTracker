import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 16,
      backgroundColor: '#f5f5f5',
    },
    header: {
      fontSize: 24,
      fontWeight: 'bold',
      marginBottom: 16,
      backgroundColor:'#3b5998',
      paddingBottom:20,
      padding:10,
      marginTop:10,
      paddingLeft:10
    },
    row: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      paddingVertical: 8,
      borderBottomWidth: 1,
      borderBottomColor: '#ddd',
      backgroundColor:'gray',
      padding:20
    },
    label: {
      fontSize: 16,
      color: '#333',
    },
    value: {
      fontSize: 16,
      color: '#333',
    },
    amountRow: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      width: '50%',
    },
    amountLabel: {
      fontSize: 16,
      color: 'red',
    },
  });
  
  export default styles;