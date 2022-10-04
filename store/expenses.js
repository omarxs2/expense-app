import { createSlice } from '@reduxjs/toolkit'

const expensesSlice = createSlice({
    name: 'expenses',
    initialState: {
        expenses: []
    },
    reducers: {
        setExpenses: (state, action) => {
            const inverted = action.payload.expenses.reverse();
            state.expenses = inverted
        },
        addRecord: (state, action) => {
            const id = new Date().toString() + Math.random().toString();
            state.expenses = [action.payload.record, ...state.expenses]
            // state.expenses.push({ ...action.payload.record, id: id });
        },
        removeRecord: (state, action) => {
            const recordIndex = state.expenses.findIndex((exp) => exp.id === action.payload.id);
            state.expenses.splice(recordIndex, 1);
            // state.expenses.filter((exp) => (
            //     exp.id !== action.payload.id
            //     ));
        },
        updateRecord: (state, action) => {
            const recordIndex = state.expenses.findIndex((exp) => exp.id === action.payload.id);
            const originalRecord = state.expenses[recordIndex]
            const newRecord = { ...originalRecord, ...action.payload.record }
            const allRecords = [...state.expenses]
            allRecords[recordIndex] = newRecord
            state.expenses = [...allRecords]
        },


    }
});

export const setExpenses = expensesSlice.actions.setExpenses;
export const addRecord = expensesSlice.actions.addRecord;
export const removeRecord = expensesSlice.actions.removeRecord;
export const updateRecord = expensesSlice.actions.updateRecord;

export default expensesSlice.reducer



