import React from "react";

const SearchBox = ({ textBox, setTextBox }) => {
  console.log(textBox);
  return (
    <input
      type="text"
      placeholder="Busca un gif"
      value={textBox}
      onChange={(e) => setTextBox(e.target.value)}
    />
  );
};

export default SearchBox;
