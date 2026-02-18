import { useState } from "react";
import "./Form.css";

const Form = ({ addItem }) => {
  const [name, setName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name.trim()) {
      alert("Please enter an item name ⚠️");
      return;
    }

    addItem(name);
    setName(""); // clear input
  };

  return (
    <form className="form-control" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Enter grocery item..."
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <button type="submit" className="btn">
        Add
      </button>
    </form>
  );
};

export default Form;
