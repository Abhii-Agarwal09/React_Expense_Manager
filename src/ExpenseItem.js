import ExpenseDate from "./ExpenseDate";
import "./ExpenseItem.css"
// import ExpenseDate from "./ExpenseDate";

// props -> is a object that contains all the properties that we pass on to the component
function ExpressItem(props) {
    // we can write normal javascript code here and use it in the JSX

    return (
        <div className="expense-item">
            <ExpenseDate date={props.date} />
            <div className="expense-item__description">
                <h2>
                    {props.title}
                </h2>
                <div className="expense-item__price">
                    {props.amount}
                </div>
            </div>
        </div>
    );
}

export default ExpressItem;