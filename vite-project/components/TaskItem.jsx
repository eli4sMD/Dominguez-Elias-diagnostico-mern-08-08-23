import React from 'react';

const TaskItem = ({ task, onComplete, onDelete }) => {
  const handleCheckboxChange = () => {
    onComplete(task._id, !task.completed);
  };

  return (
    <li className={`task-item ${task.completed ? 'completed' : ''}`}>
      <label>
        <input
          type="checkbox"
          checked={task.completed}
          onChange={handleCheckboxChange}
        />
        {task.title}
      </label>
      <button onClick={() => onDelete(task._id)}>Eliminar</button>
    </li>
  );
};

export default TaskItem;
