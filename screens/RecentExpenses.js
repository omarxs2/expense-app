import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import ExpensesOutput from '../components/expenses/ExpensesOutput';

function RecentExpenses(props) {

  let expenses = [
    { id: 'e1', description: 'Taxis & buses', date: new Date('2022/10/01'), amount: 99 },
    { id: 'e2', description: 'Milano ticket', date: new Date('2022/10/01'), amount: 100 },

  ]


  return (
    <View style={styles.container}>
      <ExpensesOutput expenses={expenses} period={'Last 7 Days'} />
    </View>
  );
}

export default  RecentExpenses;

const styles = StyleSheet.create({
  container: {
    flex: 1,

  },
});
