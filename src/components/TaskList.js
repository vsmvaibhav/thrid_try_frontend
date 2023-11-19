
// TaskList.js

import React from "react";
import { FaEdit, FaTrash } from "react-icons/fa";
import "./TaskList.css";

const TaskList = ({ tasks, onEditTask, onDeleteTask }) => {

  const calculateDaysRemaining = (dueDate) => {
    const today = new Date();
    const due = new Date(dueDate);
    const timeDifference = due.getTime() - today.getTime();
    const daysRemaining = Math.ceil(timeDifference / (1000 * 3600 * 24));

    return daysRemaining;
  };

  return (
    <div className="task-list-container justify-content-center">
      <ul className="task-list">
        {tasks.map((task, index) => (
          <li className="tasklist_li" key={index}>
            <p>Name : {task.task}</p>
            <p>Priority: {task.priority}</p>
            <p>Due Date: {task.dueDate}</p>
            <p>Days Remaining: {calculateDaysRemaining(task.dueDate)}</p>
            <button className="edit_button" onClick={() => onEditTask(task)}>
              <FaEdit />
            </button>
            <button
              className="delete_button"
              onClick={() => onDeleteTask(index, task._id)}
            >
              <FaTrash />
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TaskList;