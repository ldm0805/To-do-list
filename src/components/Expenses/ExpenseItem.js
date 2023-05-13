//Importiamo lo state da react per cambiare i dati nel codice.
import React, { useState } from "react";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";

//Importo la personalizzazione
import "./ExpenseItem.scss";
// Componente
//Aggiungiamo il parametro props(oggetto) per aggiungere i parametri delle props
const ExpanseItem = (props) => {
  //Definiamo lo state per props.title in modo da cambiarne il valore
  //Funzione per cambiare lo stato di un componente, viene richiamato direttamente nella componente
  const [title, setTitle] = useState(props.title);

  //Funzione per far comparire il console.log al click del pulsante
  const clickHandler = () => {
    setTitle("Updated!");
    console.log("clicked");
  };

  return (
    <Card className="expense-item">
      <ExpenseDate
        date={props.date}
        price={props.price}
        description={props.description}
      />
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
      <button
        className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center"
        onClick={clickHandler}
      >
        Change title
      </button>
    </Card>
  );
};
export default ExpanseItem;

// Nel return ci deve essere solo un'elemento, in questo caso ritorna un solo div che al suo interno ha altri elementi.
// Con le parentesi tonde indichiamo (javascript) che quello è un'unico statement anche se è su più righe.
// usare le parentesi {} per utilizzare dei valori
// {expenseDate.toISOString()} usiamo questa sintassi per stampare la data perché è un'oggetto data.
// The toISOString() method returns a string in simplified extended ISO format (ISO 8601), which is always 24 or 27 characters long (YYYY-MM-DDTHH:mm:ss.sssZ or ±YYYYYY-MM-DDTHH:mm:ss.sssZ, respectively)
