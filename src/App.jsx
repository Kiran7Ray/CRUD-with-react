import Items from "./components/Items";
import Form from "./components/Form";
import { groceryItems } from "./data/groceryItems";
import { useState } from "react";
import "./App.css";

const App = () => {
  const [items, setItems] = useState(groceryItems);

  // ✅ ADD ITEM
  const addItem = (name) => {
    const newItem = {
      id: Date.now(),
      name: name,
      completed: false,
    };

    setItems([...items, newItem]);

    alert("Item added successfully ");
  };

  // ✅ TOGGLE
  const editCompleted = (itemId) => {
    alert("Item status updated ");

    const newItems = items.map((item) =>
      item.id === itemId ? { ...item, completed: !item.completed } : item,
    );

    setItems(newItems);
  };

  // ✅ DELETE
  const deleteItem = (itemId) => {
    const confirmDelete = confirm("Are you sure you want to delete this item?");

    if (!confirmDelete) return;

    setItems(items.filter((item) => item.id !== itemId));

    alert("Item deleted ");
  };

  return (
    <section className="section-center">
      {/* NEW FORM */}
      <Form addItem={addItem} />

      <Items
        items={items}
        editCompleted={editCompleted}
        deleteItem={deleteItem}
      />
    </section>
  );
};

export default App;
