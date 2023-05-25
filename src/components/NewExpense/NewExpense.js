import "./NewExpense.scss";
//IMporto la form
import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) => {
  const saveExpanseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpanse(expenseData);
  };

  return (
    <div className="new-expense">
      <ExpenseForm onSaveExpanseData={saveExpanseDataHandler} />
    </div>
  );
};
export default NewExpense;
