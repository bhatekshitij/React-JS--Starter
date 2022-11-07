
import './App.css';

import Expenses from './Components/Expenses/Expenses';
function App() {
  const name = 'kshitij';
  const expenses = [{
    id: '321e',
    name: 'Car Insurance',
    amount: 94.12,
    date: new Date(2022, 7, 8)
  },
  {
    id: '421e',
    name: 'Laundary',
    amount: 14.12,
    date: new Date(2022, 7, 26)
  },
  {
    id: '321e',
    name: 'Car repairs',
    amount: 694.12,
    date: new Date(2022, 2, 21)
  },]
  return (
    <div className="App">
      <h1>Lets get started with this udemy course once again {name}</h1>
      <h2>{name}</h2>
      <Expenses items={expenses} />
    </div>
  );
}

export default App;
