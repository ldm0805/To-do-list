//Importo la personalizzazione
import "./ExpenseItem.css";
// Componente
function ExpanseItem() {
  const expenseDate = new Date(2021, 2, 28);
  const expenseTitle = "Car Insurance";
  const expenseAmount = 294.67;
  return (
    <div className="expense-item">
      <div>{expenseDate.toISOString()}</div>
      <div className="expense-item__description">
        <h2>{expenseTitle}</h2>
        <div className="expense-item__price">${expenseAmount}</div>
      </div>
    </div>
  );
}
export default ExpanseItem;

// Nel return ci deve essere solo un'elemento, in questo caso ritorna un solo div che al suo interno ha altri elementi.
// Con le parentesi tonde indichiamo (javascript) che quello è un'unico statement anche se è su più righe.
// usare le parentesi {} per utilizzare dei valori
// {expenseDate.toISOString()} usiamo questa sintassi per stampare la data perché è un'oggetto data.
// The toISOString() method returns a string in simplified extended ISO format (ISO 8601), which is always 24 or 27 characters long (YYYY-MM-DDTHH:mm:ss.sssZ or ±YYYYYY-MM-DDTHH:mm:ss.sssZ, respectively)
