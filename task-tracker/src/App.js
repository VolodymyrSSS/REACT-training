import { useState } from 'react';
import Header from './components/Header';
import Tasks from './components/Tasks';
import AddTask from './components/AddTask';

const App = () => {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: 'physical exercises: jogging, pullups, stretching',
      day: 'March 25th, at 10.30am',
      reminder: true
    },
    {
      id: 2,
      text: 'IT-classes: unit-testing in React topic',
      day: 'March 26th, at 13.45am',
      reminder: true
    },
    {
      id: 3,
      text: 'dacha activity - protect trees against-insect spray, book shelf constructions',
      day: 'March 27th, at 12.10am',
      reminder: false
    }
  ]);

  // add task
  const addTask = (task) => {
    const id = Math.floor(Math.random() * 10000) + 1;

    const newTask = {id, ...task};
    setTasks([...tasks, newTask]);
  }

  // delete task
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id))
  };

  // toggle remainder
  const toggleReminder = (id) => {
    setTasks(tasks.map((task) => task.id === id ? { ...task, reminder: !task.reminder } : task));
  };

  return (
    <div className="container">
      <Header />
      <AddTask onAdd={addTask} />
      {tasks.length > 0 ? 
        <Tasks  tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} /> : 
        <h3>No tasks to show</h3>}
    </div>
  );
}

export default App;
