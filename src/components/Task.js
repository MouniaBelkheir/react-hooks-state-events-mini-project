import React from "react";

function Task({ text, category, onDelete }) {
  const handleDelete = () => {
    onDelete();
  };

  return (
    <div className="task">
      <div>{text}</div>
      <div>{category}</div>
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
}

export default Task;