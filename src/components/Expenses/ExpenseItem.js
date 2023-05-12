import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";

//Importo la personalizzazione
import "./ExpenseItem.css";
// Componente
//Aggiungiamo il parametro props(oggetto) per aggiungere i parametri delle props
function ExpanseItem(props) {
  return (
    <Card className="expense-item">
      <ExpenseDate
        date={props.date}
        price={props.price}
        description={props.description}
      />
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
    </Card>
  );
}
export default ExpanseItem;

// Nel return ci deve essere solo un'elemento, in questo caso ritorna un solo div che al suo interno ha altri elementi.
// Con le parentesi tonde indichiamo (javascript) che quello è un'unico statement anche se è su più righe.
// usare le parentesi {} per utilizzare dei valori
// {expenseDate.toISOString()} usiamo questa sintassi per stampare la data perché è un'oggetto data.
// The toISOString() method returns a string in simplified extended ISO format (ISO 8601), which is always 24 or 27 characters long (YYYY-MM-DDTHH:mm:ss.sssZ or ±YYYYYY-MM-DDTHH:mm:ss.sssZ, respectively)