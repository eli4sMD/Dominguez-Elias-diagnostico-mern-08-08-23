import React, { useState, useEffect } from 'react';
import axios from 'axios';
import TaskList from '../components/TaskList';
import TaskForm from '../components/TaskForm';
import './styles.css';

const App = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    fetchTasks();
  }, []);

  const fetchTasks = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/tasks'); // Cambiar la URL aquí
      setTasks(response.data);
    } catch (error) {
      console.error('Error al obtener las tareas:', error);
    }
  };
  

  const handleCompleteTask = async (taskId, completed) => {
    try {
      await axios.put(`http://localhost:5000/api/tasks/${taskId}/complete`, { completed }); // Cambiar la URL aquí
      fetchTasks(); // Esto actualiza las tareas en el estado
    } catch (error) {
      console.error('Error al marcar/ desmarcar la tarea como completada:', error);
    }
  };


  
  const handleDeleteTask = async (taskId) => {
    try {
      await axios.delete(`http://localhost:5000/api/tasks/${taskId}`); // Cambiar la URL aquí
      fetchTasks();
    } catch (error) {
      console.error('Error al eliminar la tarea:', error);
    }
  };
  
  const handleAddTask = async (title) => {
    try {
      await axios.post('http://localhost:5000/api/tasks', { title }); // Cambiar la URL aquí
      fetchTasks();
    } catch (error) {
      console.error('Error al agregar la tarea:', error);
    }
  };

  return (
    <div className="app">
      <h1>Lista de Tareas</h1>
      <TaskForm onAddTask={handleAddTask} />
      <TaskList
        tasks={tasks}
        onComplete={handleCompleteTask}
        onDelete={handleDeleteTask}
      />
    </div>
  );
};

export default App;
