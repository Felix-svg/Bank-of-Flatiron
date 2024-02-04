import { useState } from "react";

function TransactionTable({ transactions }) {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredTransactions = transactions.filter((transaction) =>
    transaction.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Sort the transactions alphabetically by category
  transactions.sort((a, b) => a.category.localeCompare(b.category));

  return (
    <div className="table-search">
      <h3 className="transactions">Transactions</h3>
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
          {filteredTransactions.map((transaction) => (
            <tr key={transaction.id}>
              <td>{transaction.date}</td>
              <td>{transaction.description}</td>
              <td>{transaction.category}</td>
              <td>{transaction.amount}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <input
        type="text"
        placeholder="Search transaction"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      ></input>
    </div>
  );
}

export default TransactionTable;
