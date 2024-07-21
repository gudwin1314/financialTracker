import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import TransactionList from './List/TransactionList';
import TransactionDetail from './Details/TransactionDetail';
import Summary from './Details/summary/Summary';
import Icon from 'react-native-vector-icons/MaterialIcons';

const transactions = [
  { id: '1', name: 'Starbucks', amount: 12.00 },
  { id: '2', name: 'Apple Store', amount: 101.00 },
  { id: '3', name: 'Sephora', amount: 120.00 },
  { id: '4', name: 'Shoppers Drug Mart', amount: 12.00 },
  { id: '5', name: 'Pizza Hut', amount: 24.00 },
  { id: '6', name: 'Cheesecake Factory', amount: 45.00 },
  { id: '7', name: 'Nike', amount: 250.00 },
  { id: '8', name: 'Tim Hortons', amount: 7.89 },
  { id: '9', name: 'Whole Foods', amount: 78.00 },
  { id: '10', name: 'Cineplex', amount: 42.50 },
  { id: '11', name: 'Fanshawe College', amount: 45.50 },
];

const stackNav = createStackNavigator();
const bottomTab = createBottomTabNavigator();

const TransactionStack = () => (
  <stackNav.Navigator
  screenOptions={{
    headerStyle: { backgroundColor: '#3b5998' },
    headerTintColor: '#fff',
  }}
  >
    <stackNav.Screen name="Transactions List">
      {props => <TransactionList {...props} transactions={transactions} />}
    </stackNav.Screen>
    <stackNav.Screen name="TransactionDetail" component={TransactionDetail} options={{ title: 'Transaction Detail' }} />
  </stackNav.Navigator>
);

const App = () => {
  return (
    <NavigationContainer>
      <bottomTab.Navigator>
        <bottomTab.Screen name="Transactions" component={TransactionStack} 
        options={{
          tabBarLabel: 'Transactions',
          headerShown:false,
          tabBarIcon: ({ color, size }) => (
            <Icon name="list" color={color} size={size} />
          ),
        }}
        />

        <bottomTab.Screen name="Summary"
        options={{
          tabBarLabel: 'Summary',
          headerShown:false,

          tabBarIcon: ({ color, size }) => (
            <Icon name="summarize" size={size} color={color} />
          ),
        }}>
          {props => <Summary {...props} transactions={transactions} />}
        </bottomTab.Screen>
      </bottomTab.Navigator>
    </NavigationContainer>
  );
};

export default App;
