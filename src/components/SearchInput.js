import React from "react";

function SearchInput({ query, onQueryChange, onSearch }) {
  return (
    <div style={{ marginBottom: "16px", display: "flex", gap: "8px", alignItems: "center" }}>
      <input
        type="text"
        value={query}
        onChange={(event) => onQueryChange(event.target.value)}
        onKeyDown={(event) => {
          if (event.key === "Enter") {
            onSearch();
          }
        }}
        placeholder="Search asset, user, vulnerability, or threat actor"
        style={{
          flex: 1,
          padding: "10px 12px",
          borderRadius: "6px",
          border: "1px solid #ccc",
          fontSize: "16px"
        }}
      />
      <button
        type="button"
        onClick={onSearch}
        style={{
          padding: "10px 16px",
          borderRadius: "6px",
          border: "none",
          backgroundColor: "#0074D9",
          color: "white",
          fontSize: "16px",
          cursor: "pointer"
        }}
      >
        Search
      </button>
    </div>
  );
}

export default SearchInput;
