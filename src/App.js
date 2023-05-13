//Importo l'oggetto react
// import React from "react";
// App principale
// Importo il componente
import Expenses from "./components/Expenses/Expenses";
import "./components/Expenses/Expenses.scss";

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
      <h2>Let's get started!</h2>
      <div>
        <Expenses items={expenses}></Expenses>
      </div>
    </div>
  );
};

export default App;
