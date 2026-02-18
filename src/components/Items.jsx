import SingleItem from "./SingleItem";
import "./Items.css";

const Items = ({ items, editCompleted, deleteItem }) => {
  return (
    <div className="items">
      {items.map((item) => {
        return (
          <SingleItem
            key={item.id}
            item={item}
            editCompleted={editCompleted}
            deleteItem={deleteItem}
          />
        );
      })}
    </div>
  );
};

export default Items;
