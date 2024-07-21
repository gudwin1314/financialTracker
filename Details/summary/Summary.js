import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import styles from './styles';

const Summary = ({ transactions }) => {
  const totalTransactions = transactions.length;
  const totalBalance = transactions.reduce((sum, transaction) => sum + transaction.amount, 0).toFixed(2);
  const highSpending = transactions.reduce((max, transaction) => transaction.amount > max.amount ? transaction : max, transactions[0]);
  const lowSpending = transactions.reduce((min, transaction) => transaction.amount < min.amount ? transaction : min, transactions[0]);

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Summary</Text>
      <View style={styles.row}> 
      <Text style={styles.label}>Total Transactions</Text>
        <Text style={styles.value}>{totalTransactions}</Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.label}>Balance</Text>
        <Text style={styles.value}>${totalBalance}</Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.label}>High Spending</Text>
        <View style={styles.amountRow}>
          <Text style={styles.amountLabel}>{highSpending.name}</Text>
          <Text style={styles.value}>${highSpending.amount.toFixed(2)}</Text>
        </View>
      </View>
      <View style={styles.row}>
        <Text style={styles.label}>Low Spending</Text>
        <View style={styles.amountRow}>
          <Text style={styles.amountLabel}>{lowSpending.name}</Text>
          <Text style={styles.value}>${lowSpending.amount.toFixed(2)}</Text>
        </View>
      </View>
    </View>
  );
};

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 16,
//     backgroundColor: '#f5f5f5',
//   },
//   header: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     marginBottom: 16,
//     backgroundColor:'#3b5998',
//     paddingBottom:20,
//     padding:10,
//     marginTop:10,
//     paddingLeft:10
//   },
//   row: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     paddingVertical: 8,
//     borderBottomWidth: 1,
//     borderBottomColor: '#ddd',
//     backgroundColor:'gray',
//     padding:20
//   },
//   label: {
//     fontSize: 16,
//     color: '#333',
//   },
//   value: {
//     fontSize: 16,
//     color: '#333',
//   },
//   amountRow: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     width: '50%',
//   },
//   amountLabel: {
//     fontSize: 16,
//     color: 'red',
//   },
// });

export default Summary;
