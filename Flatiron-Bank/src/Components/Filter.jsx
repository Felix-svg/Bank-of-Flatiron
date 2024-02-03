import { useState } from "react";

function Filter({ transactions, onFilterChange }) {
  const [searchTerm, setSearchTerm] = useState("");

  function handleSearchChange() {
    const term = e.target.value;
    setSearchTerm(term);
    onFilterChange(term);
  }
  return (
    <div>
      <input
        type="text"
        placeholder="Search by description"
        value={searchTerm}
        onChange={handleSearchChange}
      />
    </div>
  );
}

export default Filter;
