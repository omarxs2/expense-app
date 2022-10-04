import { useLayoutEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import IconButton from '../components/ui/IconButton';
import { GlobalStyles } from '../constants/style'
import CustomButton from '../components/ui/CustomButton';
import { useSelector, useDispatch } from 'react-redux'
import { addRecord, removeRecord, updateRecord } from '../store/expenses'
import ExpensesForum from '../components/forum/ExpensesForum';

function ManageExpenses({ route, navigation }) {
  const expenses = useSelector((state) => state.expenses.expenses)
  const dispach = useDispatch();

  const id = route.params?.expenseId
  const isEditing = !!id;

  const currentRecord = expenses.find((exp) => exp.id === id);



  useLayoutEffect(() => {
    navigation.setOptions({
      title: isEditing ? 'Edit Expense' : 'Add Expense'
    })
  }, [navigation, isEditing])

  const closeHandler = () => {
    navigation.goBack();
  }

  const deleteHandler = () => {
    dispach(removeRecord({ id: id }))
    navigation.goBack();
  }

  const confirmHandler = (values) => {
    if (isEditing) {
      dispach(updateRecord({ id: id, ...values }));
    } else {
      dispach(addRecord(values));
    }
    navigation.goBack();
  }

  return (
    <View style={styles.container} >

      <ExpensesForum 
      currentRecord={currentRecord}
      isEditing={isEditing} 
      onSubmit={confirmHandler} 
      onClose={closeHandler} />

      {
        isEditing && (
          <View style={styles.deleteButton}>
            <IconButton onPress={deleteHandler} icon='trash' size={24} color={GlobalStyles.colors.secondary500} />
          </View>
        )
      }


    </View>
  );
}

export default ManageExpenses;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 6,
  },
  deleteButton: {
    margin: 10,
    padding: 10,
    borderTopWidth: 2,
    borderTopColor: GlobalStyles.colors.secondary500,
    alignItems: 'center'

  }
});
