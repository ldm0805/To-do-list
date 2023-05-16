import "./NewExpense.scss";
//IMporto la form
import ExpenseForm from "./ExpenseForm";

const NewExpense = () => {
  return (
    <div className="new-expense">
      <ExpenseForm />
    </div>
  );
};
export default NewExpense;
