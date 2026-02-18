import { FiEdit, FiTrash2 } from "react-icons/fi";
import "./SingleItem.css";

const SingleItem = ({ item, editCompleted }) => {
  return (
    <div className="single-item">
      <input
        type="checkbox"
        checked={item.completed}
        onChange={() => editCompleted(item.id)}
      />

      <p
        style={{
          textTransform: "capitalize",
          textDecoration: item.completed ? "line-through" : "none",
        }}
      >
        {item.name}
      </p>

      <button
        className="btn icon-btn"
        type="button"
        onClick={() => editCompleted(item.id)}
      >
        <FiEdit size={18} />
      </button>

      <button
        className="btn icon-btn remove-btn"
        type="button"
        onClick={() => editCompleted(item.id)}
      >
        <FiTrash2 size={18} />
      </button>
    </div>
  );
};

export default SingleItem;
