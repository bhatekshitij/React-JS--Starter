import React, { useState } from 'react';

import './ExpenseForm.css';


const ExpenseForm = () => {

    const [enteredTitle, setEntertedTitle] = useState('')
    const [enteredAmount, setEnteredAmount] = useState('');
    const [enteredDate, setEnteredDate] = useState('');

    // const [userInput, setUserInput] = useState(
    //     {
    //         enteredTitle: '',
    //         enteredAmount: '',
    //         entredDate: '',
    //     }

    // );


    const titleChangeHandler = (event) => {
        setEntertedTitle(event.target.value);
        console.log(enteredTitle);

        // setUserInput({
        //     ...userInput,//-> ...-> these three dots basically represents to copy all the elements in the array and store it in a variable for temporary reasons. here userInput is the variable where all the elements are copied.
        //     enteredTitle: event.target.value
        // });

    }


    const amountChangeHandler = (event) => {
        setEnteredAmount(event.target.value);

    }

    const dateChangeHandler = (event) => {
        setEnteredDate(event.target.value);

    }


    const submitHandler = (event) => {
        event.preventDefault();

        const expenseData = {
            title: enteredTitle,
            amount: enteredAmount,
            date: new Date(enteredDate),

        }
        console.log(expenseData);

    }
    return (
        <form onSubmit={submitHandler}>
            <div className="new-expense__controls">
                <div class="new-expense__control">
                    <label for="title">title</label>
                    <input type="text" onChange={titleChangeHandler} />
                </div>


                <div className="new-expense__control">
                    <label for="amount">Amount</label>
                    <input type="number" min="0.001" step="0.01" onChange={amountChangeHandler} />
                </div>



                <div className="new-expense__control">
                    <label for="Date">Date</label>
                    <input type="date" min="2019-01-01" max="2023-01-01" onChange={dateChangeHandler} />
                </div>
            </div>

            <div className="new-expense__actions">
                <button type="submit">Add submit</button>
            </div>
        </form>
    )
}

export default ExpenseForm;