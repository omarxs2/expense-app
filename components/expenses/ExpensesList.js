import { StyleSheet, Text, View, FlatList, Pressable } from 'react-native';
import { GlobalStyles } from '../../constants/style'
import ExpensesItem from './ExpensesItem';

const ItemData = (itemData) => {
    return <ExpensesItem itemData={itemData} />
}

function ExpensesList({ expenses }) {
    return <FlatList data={expenses} renderItem={ItemData} keyExtractor={(item) => item.id} />
}

export default ExpensesList;

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: GlobalStyles.colors.secondary100,
        margin: 4,
        borderRadius: 8,
        paddingHorizontal: 10,
        paddingVertical: 6,
    },
    text: {
        fontSize: 12
    },
    pressed: {
        opacity: 0.5
    },

});
