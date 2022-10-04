import { useLayoutEffect, useState } from 'react';
import { StyleSheet, View } from 'react-native';
import IconButton from '../components/ui/IconButton';
import { GlobalStyles } from '../constants/style'
import { useSelector, useDispatch } from 'react-redux'
import { addRecord, removeRecord, updateRecord } from '../store/expenses'
import ExpensesForum from '../components/forum/ExpensesForum';
import { addExpense, updateExpense, deleteExpense } from '../services/expenseServices'
import ErrorOverlay from '../components/ui/ErrorOverlay';

function ManageExpenses({ route, navigation }) {
  const expenses = useSelector((state) => state.expenses.expenses)
  const dispach = useDispatch();

  const [isSubmiting, setIsSubmiting] = useState(true);
  const [error, setError] = useState(null);

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

  const deleteHandler = async () => {
    setIsSubmiting(true);
    try {
      await deleteExpense(id);
      dispach(removeRecord({ id: id }))
      navigation.goBack();
    } catch (error) {
      setError('Could not delete the record - Please try again later.');
      setIsSubmiting(false);
    }

  }

  const confirmHandler = async (values) => {
    try {
      if (isEditing) {
        await updateExpense(id,
          {
            amount: values.record.amount,
            description: values.record.description,
            date: values.record.date
          }
        )
        dispach(updateRecord({ id: id, ...values }));
      } else {
        const id = await addExpense(values.record)
        dispach(addRecord({ id, ...values }));
      }
      navigation.goBack();
    } catch (error) {
      setError('Could not add/update the record - Please try again later.');
      setIsSubmiting(false);
    }


  }

  const errorHandler = () => {
    setError(null);
  }
  if (!isSubmiting && error) {
    return <ErrorOverlay message={error} onConfirm={errorHandler} />
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
