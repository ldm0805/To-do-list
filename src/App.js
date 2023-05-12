// App principale
// Importo il componente
import Expenses from "./components/Expenses";
import "./components/Expenses.css";

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

function App() {
  return (
    <div>
      <h2>Let's get started!</h2>
      <div>
        <Expenses items={expenses}></Expenses>
      </div>
    </div>
  );
}

export default App;
