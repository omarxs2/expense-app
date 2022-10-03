import { StyleSheet, View } from 'react-native';
import ExpensesOutput from '../components/expenses/ExpensesOutput';

function AllExpenses(props) {
  let expenses = [
    { id: 'e1', description: 'Taxis & buses', date: new Date('2022/10/01'), amount: 99 },
    { id: 'e2', description: 'Milano ticket', date: new Date('2022/10/01'), amount: 100 },
    { id: 'e3', description: 'Phone covers', date: new Date('2022/10/02'), amount: 79.99 },
    { id: 'e4', description: 'Bills payment', date: new Date('2022/10/03'), amount: 112.89 },
    { id: 'e5', description: 'Labtop', date: new Date('2022/10/02'), amount: 435 },
  ]

  return (
    <View style={styles.container}>
      <ExpensesOutput expenses={expenses} period={'Total'} />
    </View>
  );
}

export default AllExpenses;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
