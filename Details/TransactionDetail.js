import React from 'react';
import { View, Text} from 'react-native';
import detailStyles from './detailStyle';
const TransactionDetail = ({ route }) => {
  const { item } = route.params;

  return (
    <View style={detailStyles.container}>
      <View style={detailStyles.header}>
        <Text style={detailStyles.amount}>{`$${item.amount}`}</Text>
        <Text style={detailStyles.name}>{item.name}</Text>
        <Text style={detailStyles.location}>North York, ON</Text>
      </View>
      <View style={detailStyles.body}>
        <Text style={detailStyles.label}>Transaction Date</Text>
        <Text style={detailStyles.value}>Mar 14, 2024</Text>
      </View>
    </View>
  );
};

export default TransactionDetail;
