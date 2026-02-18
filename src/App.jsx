import { useState } from "react";
import Form from "./components/Form";
import Items from "./components/Items";
import { groceryItems } from "./data/groceryItems";
import "./App.css";

const App = () => {
  const [items, setItems] = useState(groceryItems);

  // edit states
  const [editId, setEditId] = useState(null);
  const [editName, setEditName] = useState("");

  // ADD
  const addItem = (name) => {
    const newItem = {
      id: Date.now(),
      name,
      completed: false,
    };

    setItems([...items, newItem]);
  };

  // TOGGLE
  const editCompleted = (id) => {
    setItems(
      items.map((item) =>
        item.id === id ? { ...item, completed: !item.completed } : item,
      ),
    );
  };

  // DELETE
  const deleteItem = (id) => {
    if (!confirm("Delete this item?")) return;
    setItems(items.filter((item) => item.id !== id));
  };

  // START EDIT
  const startEdit = (item) => {
    setEditId(item.id);
    setEditName(item.name);
  };

  // UPDATE NAME
  const updateItem = (name) => {
    setItems(
      items.map((item) => (item.id === editId ? { ...item, name } : item)),
    );

    setEditId(null);
    setEditName("");
  };

  return (
    <section className="section-center">
      <h2 className="title"> Grocery List</h2>

      <Form
        addItem={addItem}
        updateItem={updateItem}
        editId={editId}
        editName={editName}
        setEditName={setEditName}
      />

      <Items
        items={items}
        editCompleted={editCompleted}
        deleteItem={deleteItem}
        startEdit={startEdit}
      />
    </section>
  );
};

export default App;
