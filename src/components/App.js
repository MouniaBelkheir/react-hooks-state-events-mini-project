import React, { useState } from "react";
import TaskList from "./TaskList";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import { TASKS, CATEGORIES } from "../data";

function App() {
  const [tasks, setTasks] = useState(TASKS);
  const [filteredCategory, setFilteredCategory] = useState("All");

  const handleCategoryChange = (category) => {
    setFilteredCategory(category);
  };

  const handleTaskFormSubmit = (newTask) => {
    setTasks([...tasks, newTask]);
  };

  const handleTaskDelete = (task) => {
    setTasks(tasks.filter((t) => t !== task));
  };

  const filteredTasks = filteredCategory === "All"
    ? tasks
    : tasks.filter((task) => task.category === filteredCategory);

  return (
    <div className="App">
      <CategoryFilter
        categories={CATEGORIES}
        selectedCategory={filteredCategory}
        onCategoryChange={handleCategoryChange}
      />
      <TaskList tasks={filteredTasks} onDelete={handleTaskDelete} />
      <NewTaskForm categories={CATEGORIES} onTaskFormSubmit={handleTaskFormSubmit} />
    </div>
  );
}
export default App;