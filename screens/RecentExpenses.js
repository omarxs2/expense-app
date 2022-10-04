import { StyleSheet, View } from 'react-native';
import ExpensesOutput from '../components/expenses/ExpensesOutput';
import { useSelector } from 'react-redux'

function RecentExpenses(props) {
  const expenses = useSelector((state) => state.expenses.expenses)

  const last7DaysExpenses = expenses.filter((exp) => {
    const today = new Date();
    const before7Days = new Date(today.getFullYear(), today.getMonth(), today.getDate() - 7);
    return exp.date > before7Days
  });


  return (
    <View style={styles.container}>
      <ExpensesOutput fallBackText='No expenses on the last 7 days.' expenses={last7DaysExpenses} period={'Last 7 Days'} />
    </View>
  );
}

export default RecentExpenses;

const styles = StyleSheet.create({
  container: {
    flex: 1,

  },
});
