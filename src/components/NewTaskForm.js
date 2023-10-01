import React, { useState } from "react";

function NewTaskForm({ categories, onTaskFormSubmit }) {
  const [taskText, setTaskText] = useState("");
  const [taskCategory, setTaskCategory] = useState(categories[0]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const newTask = {
      text: taskText,
      category: taskCategory,
    };

    onTaskFormSubmit(newTask);

    setTaskText("");
    setTaskCategory(categories[0]);
  };

  const handleTaskTextChange = (e) => {
    setTaskText(e.target.value);
  };

  const handleTaskCategoryChange = (e) => {
    setTaskCategory(e.target.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Task description"
        value={taskText}
        onChange={handleTaskTextChange}
      />
      <select
        value={taskCategory}
        onChange={handleTaskCategoryChange}
      >
        {categories.map((category) => (
          <option key={category} value={category}>
            {category}
          </option>
        ))}
      </select>
      <button type="submit">Add Task</button>
    </form>
  );
}

export default NewTaskForm;