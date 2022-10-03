import { useLayoutEffect } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import IconButton from '../components/ui/IconButton';
import { GlobalStyles } from '../constants/style'
import CustomButton from '../components/ui/CustomButton';

function ManageExpenses({ route, navigation }) {
  const id = route.params?.expenseId
  const isEditing = !!id;

  useLayoutEffect(() => {
    navigation.setOptions({
      title: isEditing ? 'Edit Expense' : 'Add Expense'
    })
  }, [navigation, isEditing])

  const closeHandler = ()=>{
    navigation.goBack();
  }
  return (
    <View style={styles.container}>
      <Text>Hi</Text>
      <View style={styles.buttonsContainer}>
        <CustomButton
        onPress={closeHandler}
          color={'#fff'}
          textColor={GlobalStyles.colors.secondary500}
          borderColor={GlobalStyles.colors.secondary500}>
          Cancel
        </CustomButton>
        <CustomButton
          color={GlobalStyles.colors.secondary500}
          textColor={'#fff'}>
          {isEditing ? 'Edit' : 'Add'}
        </CustomButton>
      </View>

      {
        isEditing && (
          <View style={styles.deleteButton}>
            <IconButton icon='trash' size={24} color={GlobalStyles.colors.secondary500} />
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
    padding:6,
     
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems:'center'
  },
  deleteButton: {
    margin: 10,
    padding: 10,
    borderTopWidth: 2,
    borderTopColor: GlobalStyles.colors.secondary500,
    alignItems: 'center'

  }
});
