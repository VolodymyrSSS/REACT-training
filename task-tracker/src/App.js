import { useState, useEffect } from 'react';
import Header from './components/Header';
import Tasks from './components/Tasks';
import AddTask from './components/AddTask';

const App = () => {
    
  // const [tasks, setTasks] = useState([
  //   {
  //     id: 1,
  //     text: 'physical exercises: jogging, pullups, stretching',
  //     day: 'March 25th, at 10.30am',
  //     reminder: true
  //   },
  //   {
  //     id: 2,
  //     text: 'IT-classes: unit-testing in React topic',
  //     day: 'March 26th, at 13.45am',
  //     reminder: true
  //   },
  //   {
  //     id: 3,
  //     text: 'dacha activity - protect trees against-insect spray, book shelf constructions',
  //     day: 'March 27th, at 12.10am',
  //     reminder: false
  //   }
  // ]);

  const[showAddTask, setShowAddTask] = useState(false);

  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const getTasks = async () => {
      const tasksFromServer = await fetchTasks();
      setTasks(tasksFromServer)
    }
    getTasks();
  }, []);

  // fetch tasks
  const fetchTasks = async () => {
    const res = await fetch('http://localhost:5000/tasks');
    const data = await res.json();

    return data;
  }

  // add task
  const addTask = async (task) => {
    // add on UI
    // const id = Math.floor(Math.random() * 10000) + 1; // create ID
    // const newTask = {id, ...task} // assign ID to the new task
    // setTasks([...tasks, newTask]) // change the state with new task

    // add on server
    const res = await fetch('http://localhost:5000/tasks', {
      method: 'POST',
      headers: {'Content-type': 'application/json'},
      body: JSON.stringify(task)
    });
    const data = await res.json(); // getting a new task
    setTasks([...tasks, data]); // take existing tasks and add new task to it
  }

  // delete task
  const deleteTask = async (id) => {
    await fetch(`http://localhost:5000/tasks/${id}`, { // delete on server
      method: 'DELETE'
    })

    setTasks(tasks.filter((task) => task.id !== id)) // delete from UI
  };

  // toggle remainder
  const toggleReminder = (id) => {
    setTasks(tasks.map((task) => task.id === id ? { ...task, reminder: !task.reminder } : task));
  };

  return (
    <div className="container">
      <Header onAdd={() => setShowAddTask(!showAddTask)} showAdd={showAddTask}/>
      {showAddTask && <AddTask onAdd={addTask} />}
      {tasks.length > 0 ? 
        <Tasks  tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} /> : 
        <h3>No tasks to show</h3>}
    </div>
  );
}

export default App;
