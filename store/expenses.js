import { createSlice } from '@reduxjs/toolkit'

const expensesSlice = createSlice({
    name: 'expenses',
    initialState: {
        expenses: [
            { id: 'e1', description: 'Taxis & buses', date: new Date('2022/10/01'), amount: 99 },
            { id: 'e2', description: 'Milano ticket', date: new Date('2022/10/01'), amount: 100 },
            { id: 'e3', description: 'Phone covers', date: new Date('2022/10/02'), amount: 79.99 },
            { id: 'e4', description: 'Bills payment', date: new Date('2022/08/03'), amount: 112.89 },
            { id: 'e5', description: 'Labtop', date: new Date('2022/09/02'), amount: 435 },
        ]
    },
    reducers: {
        addRecord: (state, action) => {
            const id = new Date().toString() + Math.random().toString();
            state.expenses = [{ ...action.payload.record, id: id }, ...state.expenses]
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

export const addRecord = expensesSlice.actions.addRecord;
export const removeRecord = expensesSlice.actions.removeRecord;
export const updateRecord = expensesSlice.actions.updateRecord;

export default expensesSlice.reducer



