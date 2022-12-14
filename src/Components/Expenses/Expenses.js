
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import './Expenses.css'

function Expenses(props) {
    return (
        <Card class="expenses">
            <ExpenseItem
                name={props.items[0].name}
                id={props.items[0].id}
                amount={props.items[0].amount}
                date={props.items[0].date}>
            </ExpenseItem>
            <ExpenseItem name={props.items[1].name}
                id={props.items[1].id}
                amount={props.items[1].amount}
                date={props.items[1].date}>

            </ExpenseItem>
            <ExpenseItem name={props.items[2].name}
                id={props.items[2].id}
                amount={props.items[2].amount}
                date={props.items[2].date}>

            </ExpenseItem>
        </Card>
    )

}
export default Expenses;
