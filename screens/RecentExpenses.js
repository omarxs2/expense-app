import { StyleSheet, View } from 'react-native';
import ExpensesOutput from '../components/expenses/ExpensesOutput';
import { useSelector, useDispatch } from 'react-redux'
import { getExpenses } from '../services/expenseServices'
import { useEffect, useState } from 'react';
import { setExpenses } from '../store/expenses'
import Loading from '../components/ui/Loading'
import ErrorOverlay from '../components/ui/ErrorOverlay';

function RecentExpenses(props) {
  const dispach = useDispatch();
  const expenses = useSelector((state) => state.expenses.expenses)
  const [isFetching, setIsFetching] = useState(true);
  const [error, setError] = useState(null);


  const last7DaysExpenses = expenses.filter((exp) => {
    const today = new Date();
    const before7Days = new Date(today.getFullYear(), today.getMonth(), today.getDate() - 7);
    return exp.date > before7Days
  });

  useEffect(() => {
    const fetchData = async () => {
      setIsFetching(true)
      try {
        const resp = await getExpenses();
        dispach(setExpenses({ expenses: resp }))
      } catch (error) {
        setError('Please try again later.')
      }
      setIsFetching(false)
    }
    fetchData();
  }, [])

  const errorHandler = () => {
    setError(null);
  }

  if (!isFetching && error) {
    return <ErrorOverlay message={error} onConfirm={errorHandler} />
  }

  if (isFetching) {
    return <Loading />
  }

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
