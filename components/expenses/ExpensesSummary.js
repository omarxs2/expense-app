import { StyleSheet, Text, View, FlatList } from 'react-native';
import { GlobalStyles } from '../../constants/style'

function ExpensesSummary({ expenses, period }) {
    const expensesSum = expenses.reduce((sum, exspense) => {
        return sum + exspense.amount
    }, 0);

    return (
        <View style={styles.container}>
            <Text style={styles.text}>{period} Expenses </Text>
            <View style={styles.textBack}>
            <Text style={styles.text}>${expensesSum.toFixed(2)}</Text>

            </View>
        </View>

    );
}

export default ExpensesSummary;

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        backgroundColor: GlobalStyles.colors.primary800,
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 10,
        paddingVertical: 8,
        borderRadius: 8,
        margin: 4,

    },
    text: {
        color: GlobalStyles.colors.secondary100,
    },
    textBack: {
        backgroundColor: GlobalStyles.colors.secondary500,
        padding:4,
        borderRadius:4

    }
});
