//Importo l'oggetto react
// import React from "react";
// App principale
// Importo il componente
import Expenses from "./components/Expenses/Expenses";
import "./components/Expenses/Expenses.scss";
import NewExpense from "./components/NewExpense/NewExpense";

const expenses = [
  {
    id: "e1",
    title: "Toilet Paper",
    amount: 94.12,
    date: new Date(2022, 5, 14),
  },
  {
    id: "e2",
    title: "Car Tax",
    amount: 170.0,
    date: new Date(2019, 7, 14),
  },
  {
    id: "e3",
    title: "Gas",
    amount: 50,
    date: new Date(2020, 7, 14),
  },
  {
    id: "e4",
    title: "Dog",
    amount: 112.25,
    date: new Date(2020, 7, 14),
  },
];

const addExpenseHandler = (expense) => {
  console.log("in app.js");
  console.log(expenses);
};

const App = () => {
  //Esempio con l'oggetto React, importato sopra
  // return React.createElement(
  //   "div",
  //   {},
  //   React.createElement("h2", {}, "Let's get started!"),
  //   React.createElement(Expenses, { items: expenses })
  // );

  //JSX
  return (
    <div>
      <NewExpense onAddExpanse={addExpenseHandler} />
      <div>
        <Expenses items={expenses}></Expenses>
      </div>
    </div>
  );
};

export default App;
