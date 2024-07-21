import React from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import styles from './styles';
const TransactionList = ({ navigation, transactions }) => {
  const renderItem = ({ item }) => (
    <TouchableOpacity style={styles.item} onPress={() => navigation.navigate('TransactionDetail', { item })}>
      <View style={styles.leftContainer}>
        <Text style={styles.name}>{item.name}</Text>
        <Text style={styles.amount}>${item.amount.toFixed(2)}</Text>
      </View>
      <Text style={styles.arrow}>➔</Text>
    </TouchableOpacity>
  );

  return (
    <FlatList
      data={transactions}
      renderItem={renderItem}
      keyExtractor={item => item.id}
      style={styles.container}
    />
  );
};


export default TransactionList;
