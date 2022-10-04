
import { useState } from 'react';
import { StyleSheet, View, Text, Alert } from 'react-native';
import Input from './Input'
import CustomButton from '../ui/CustomButton';
import { GlobalStyles } from '../../constants/style'

function ExpensesForum({ isEditing, onSubmit, onClose, currentRecord }) {
    const today = new Date();

    const [inputValues, setValues] = useState({
        amount: currentRecord?.amount.toString() || '',
        date: currentRecord?.date.toISOString().slice(0, 10) || today.toISOString().slice(0, 10),
        description: currentRecord?.description.toString() || '',
    });

    const inputChangeHandler = (inputIdentifier, value) => {
        setValues((previousValues) => ({
            ...previousValues,
            [inputIdentifier]: value,
        }));
    }

    const inputHandler = () => {
        const values = {
            description: inputValues.description,
            date: new Date(inputValues.date),
            amount: +inputValues.amount.replace(',', '.')
        }
        const amountIsValid = !isNaN(values.amount) && values.amount > 0;
        const dateIsValid = values.date.toString() !== 'Invalid Date';
        const descIsValid = values.description.trim().length > 0;

        if (
            !amountIsValid || !dateIsValid || !descIsValid) {
            return Alert.alert('Invalid Inputs', 'Please check your input values');
        }

        onSubmit({
            record: values
        });

    }




    const rowInputStyle = { flex: 1 }

    return (
        <View style={styles.rootContainer}>
            <Text style={styles.title}>Your Expense</Text>
            <View style={styles.innerContainer}>
                <Input rowInputStyle={rowInputStyle} label='Amount' textInputConfig={
                    {
                        invalid: true,
                        placeholder: 'Amount in $$',
                        keyboardType: 'decimal-pad',
                        placeholderTextColor: '#616161',
                        onChangeText: (value) => inputChangeHandler('amount', value),
                        value: inputValues.amount
                    }
                }
                />
                <Input rowInputStyle={rowInputStyle} label='Date' textInputConfig={
                    {
                        placeholder: 'YYYY-MM-DD',
                        placeholderTextColor: '#616161',
                        maxLength: 10,
                        onChangeText: (value) => inputChangeHandler('date', value),
                        value: inputValues.date
                    }
                }
                />
            </View>

            <Input label='Description' textInputConfig={
                {
                    placeholder: 'What is this expense',
                    placeholderTextColor: '#616161',
                    multiline: true,
                    autoCorrect: false,
                    autoCapitalize: 'words',
                    onChangeText: (value) => inputChangeHandler('description', value),
                    value: inputValues.description
                }
            }
            />

            <View style={styles.buttonsContainer}>
                <CustomButton
                    onPress={onClose}
                    color={'#fff'}
                    textColor={GlobalStyles.colors.secondary500}
                    borderColor={GlobalStyles.colors.secondary500}>
                    Cancel
                </CustomButton>
                <CustomButton
                    onPress={inputHandler}
                    color={GlobalStyles.colors.secondary500}
                    textColor={'#fff'}>
                    {isEditing ? 'Edit' : 'Add'}
                </CustomButton>
            </View>

        </View>
    );
}


export default ExpensesForum;


const styles = StyleSheet.create({
    rootContainer: {
        padding: 8
    },
    innerContainer: {
        flexDirection: 'row',
        justifyContent: 'center'
    },
    title: {
        fontSize: '20',
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 10
    },
    buttonsContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
});
