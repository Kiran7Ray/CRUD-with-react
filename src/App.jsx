import Items from "./components/Items";
import { groceryItems } from "./data/groceryItems";
import { useState } from "react";
import "./App.css";

const App = () => {
  const [items, setItems] = useState(groceryItems);

  // ✅ EDIT (toggle complete)
  const editCompleted = (itemId) => {
    alert("Item status updated");

    const newItems = items.map((item) => {
      if (item.id === itemId) {
        return { ...item, completed: !item.completed };
      }
      return item;
    });

    setItems(newItems);
  };

  // ✅ DELETE with confirmation
  const deleteItem = (itemId) => {
    const confirmDelete = confirm("Are you sure you want to delete this item?");

    if (!confirmDelete) return;

    const newItems = items.filter((item) => item.id !== itemId);

    setItems(newItems);

    alert("Item deleted successfully");
  };

  return (
    <section className="section-center">
      <Items
        items={items}
        editCompleted={editCompleted}
        deleteItem={deleteItem}
      />
    </section>
  );
};

export default App;
