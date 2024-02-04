import { useState } from "react";

function TransactionForm({ addTransaction }) {
  // State to manage transactions
  const [date, setDate] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [amount, setAmount] = useState("");

  function handleAddTransaction() {
    if (date && description && category && amount) {
      addTransaction({ date, description, category, amount });

      // Clear form fields
      setDate("");
      setDescription("");
      setCategory("");
      setAmount("");

      alert("Transaction added successfully!");
    } else {
      alert("Please fill in all fields.");
    }
  }

  return (
    <div className="transaction-form">
    <h3>New Transactions</h3>
      <form className="row mb-3 col-sm-2">
        <label htmlFor="date">Date:</label>
        <input
          type="date"
          id="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          required
        />
        <br />
        <label htmlFor="description">Description:</label>
        <input
          type="text"
          id="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        />
        <br />
        <label htmlFor="category">Category:</label>
        <input
          type="text"
          id="category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          required
        />
        <br />
        <label htmlFor="amount">Amount:</label>
        <input
          type="number"
          id="amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          required
        />
        <button type="button" onClick={handleAddTransaction}>
          Add Transaction
        </button>
      </form>
    </div>
  );
}

export default TransactionForm;
