import React from 'react';

import './ExpenseItem.css'

import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';
import { useState } from 'react';

function ExpenseItem(props) {

    const d = new Date(2022, 3, 25);//-> this wasn't working because the return type is a object and there for it needs to coverted tostring using toISOString method whereever the function of New Date is called, this is very important or else it wont work and entire page will go blank


    let [title, setTitle] = useState(props.name);


    const clickHandler = () => {
        setTitle('Updated');

        console.log("Shit  Clicked")

    }






    return (

        <Card className='expense-item' >

            {/* <h1>Hello motherfucker after making your second component which i know it will get deleted in the end for the project purposes</h1> */}
            <ExpenseDate date={props.date} />
            <div className='expense-item__description'><h2>{title}</h2>
                <div className='expense-item__price'>{props.amount}</div>
            </div>
            <button onClick={clickHandler}>Click this shit</button>
        </Card >





    );

}

export default ExpenseItem;
