import axios from 'axios';

const url = 'https://expenses-app-67a77-default-rtdb.europe-west1.firebasedatabase.app/'

export async function addExpense(record) {
    const resp = await axios.post(`${url}/expenses.json`, record);
    const id = resp.data.name;
    return id;
}

export async function getExpenses() {
    const resp = await axios.get(`${url}/expenses.json`);
    const expenses = [];
    for (const key in resp.data) {
        const expenseObj = {
            id: key,
            amount: resp.data[key].amount,
            description: resp.data[key].description,
            date: new Date(resp.data[key].date),

        }
        expenses.push(expenseObj);
    }

    return expenses;
}

export function updateExpense(id, newRecord) {
    return axios.put(`${url}/expenses/${id}.json`, newRecord);
}


export function deleteExpense(id) {
    return axios.delete(`${url}/expenses/${id}.json`);
}