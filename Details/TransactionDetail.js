import React from 'react';
import { View, Text,StyleSheet} from 'react-native';
// import styles from './styles';

const TransactionDetail = ({ route }) => {
  const { item } = route.params;

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.amount}>{item.amount}</Text>
        <Text style={styles.name}>{item.name}</Text>
        <Text style={styles.location}>North York, ON</Text>
      </View>
      <View style={styles.body}>
        <Text style={styles.label}>Transaction Date</Text>
        <Text style={styles.value}>Mar 14, 2024</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
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
    backgroundColor: '#fff',
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


export default TransactionDetail;
