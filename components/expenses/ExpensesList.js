import { FlatList } from 'react-native';
import ExpensesItem from './ExpensesItem';

const ItemData = (itemData) => {
    return <ExpensesItem itemData={itemData} />
}

function ExpensesList({ expenses }) {
    return <FlatList data={expenses} renderItem={ItemData} keyExtractor={(item) => item.id || new Date().toString()+Math.random().toString() } />
}

export default ExpensesList;

