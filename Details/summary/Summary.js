import React from 'react';
import { View, Text} from 'react-native';
import styles from './styles';

const Summary = ({ transactions }) => {
  const totalTransactions = transactions.length;
  const totalBalance = transactions.reduce((sum, transaction) => sum + transaction.amount, 0).toFixed(2);
  const highMoney = transactions.reduce((max, transaction) => transaction.amount > max.amount ? transaction : max, transactions[0]);
  const lowMoney = transactions.reduce((min, transaction) => transaction.amount < min.amount ? transaction : min, transactions[0]);

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
          <Text style={styles.amountLabel}>{highMoney.name}</Text>
          <Text style={styles.value}>${highMoney.amount.toFixed(2)}</Text>
        </View>
      </View>
      <View style={styles.row}>
        <Text style={styles.label}>Low Spending</Text>
        <View style={styles.amountRow}>
          <Text style={styles.amountLabel}>{lowMoney.name}</Text>
          <Text style={styles.value}>${lowMoney.amount.toFixed(2)}</Text>
        </View>
      </View>
    </View>
  );
};

export default Summary;
