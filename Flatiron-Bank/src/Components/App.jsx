import { useState, useEffect } from "react";
import TransactionTable from "./TransactionTable";
import TransactionForm from "./TransactionForm";

function App() {
  useEffect(() => {
    fetch("http://localhost:3000/transactions")
      .then((res) => res.json())
      .then((data) => setTransactions(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  const [transactions, setTransactions] = useState([]);
  console.log(transactions)

  const addTransaction = (newTransaction) => {
    setTransactions([...transactions, newTransaction]);
  };

  return (
    <div>
      <TransactionTable transactions={transactions} />
      <TransactionForm  addTransaction={addTransaction} />
    </div>
  );
}

export default App;
