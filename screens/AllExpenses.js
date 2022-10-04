import { StyleSheet, View } from 'react-native';
import ExpensesOutput from '../components/expenses/ExpensesOutput';
import { useSelector } from 'react-redux'

function AllExpenses(props) {

  const expenses = useSelector((state) => state.expenses.expenses)

  return (
    <View style={styles.container}>
      <ExpensesOutput fallBackText='No expenses yet.'expenses={expenses} period={'Total'} />
    </View>
  );
}

export default AllExpenses;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
