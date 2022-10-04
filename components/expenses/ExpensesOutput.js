import { StyleSheet, View, Text } from 'react-native';
import ExpensesList from './ExpensesList';
import ExpensesSummary from './ExpensesSummary';

function ExpensesOutput({ expenses, period, fallBackText }) {
    let content = <Text style={styles.infoText}>{fallBackText}</Text>

    if (expenses.length > 0) {
        content = <ExpensesList expenses={expenses} />
    }
    return (
        <View style={styles.container}>
            <ExpensesSummary expenses={expenses} period={period} />
            {content}
        </View>
    );
}

export default ExpensesOutput;

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    infoText: {
        textAlign: 'center',
        fontSize: 16,
    }
});
