import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Tasks from './components/Tasks';
import AddTask from './components/AddTask';
import About from './components/About';


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

  // fetch single task
  const fetchOneTask = async (id) => {
    const res = await fetch(`http://localhost:5000/tasks/${id}`);
    const data = await res.json();
    return data;
  }

  // toggle remainder
  const toggleReminder = async (id) => {
    const oneTaskToToggle = await fetchOneTask(id);
    const updOneTask = {...oneTaskToToggle, reminder: !oneTaskToToggle.reminder} // create a new task and put it in a variable
    const res = await fetch(`http://localhost:5000/tasks/${id}`, {
      method: 'PUT',
      headers: {'Content-type': 'application/json'},
      body: JSON.stringify(updOneTask)
    });
    const data = await res.json();
    // setTasks(tasks.map((task) => task.id === id ? { ...task, reminder: !task.reminder } : task)); // toggle from UI
    setTasks(tasks.map((task) => task.id === id ? { ...task, reminder: data.reminder } : task));
  };

  return (
    <Router>
      <div className="container">
        <Header onAdd={() => setShowAddTask(!showAddTask)} showAdd={showAddTask}/>
        
        <Route path='/' exact render={(props) => (
          <>
            {showAddTask && <AddTask onAdd={addTask} />}
            {tasks.length > 0 ? 
              <Tasks  tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} /> : 
              <h3>No tasks to show</h3>}
          </>
        )} />
        <Route path='/about' component={About} />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
