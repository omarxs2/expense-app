import { StyleSheet, View } from 'react-native';
import ExpensesList from './ExpensesList';
import ExpensesSummary from './ExpensesSummary';

function ExpensesOutput({ expenses, period }) {
    return (
        <View style={styles.container}>
            <ExpensesSummary expenses={expenses} period={period} />
            <ExpensesList expenses={expenses} />
        </View>
    );
}

export default ExpensesOutput;

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
});
