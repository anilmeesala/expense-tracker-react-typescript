import axios from 'axios'
import {async} from "q";

export async function getAllExpenses() {
    // fetch('https://jsonplaceholder.typicode.com/todos/1')
    //     .then(response => response.json())
    //     .then(json => console.log(json))
    // let res = await fetch('https://jsonplaceholder.typicode.com/todos/1')
    // let data = await res.json()
    // console.log(data)

    return await axios.get("http://localhost:8081/getAllExpenses");

}

export async function saveExpense(expense:any) {
    return await axios.post("http://localhost:8081/saveExpense",expense);
}



