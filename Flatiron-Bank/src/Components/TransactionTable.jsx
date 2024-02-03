import { useState } from "react";

function TransactionTable() {
  const [transactions, setTransactions] = useState([]);

  fetch("http://localhost:3000/transactions")
    .then((res) => res.json())
    .then((data) => setTransactions(data));

  return (
    <table className="table table-dark table-stripped-columns">
      <thead>
        <tr>
          <th>Date</th>
          <th>Description</th>
          <th>Category</th>
          <th>Amount</th>
        </tr>
      </thead>
      <tbody>
        {transactions.map((transaction) => (
          <tr key={transaction.id}>
            <td>{transaction.date}</td>
            <td>{transaction.description}</td>
            <td>{transaction.category}</td>
            <td>{transaction.amount}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default TransactionTable;
