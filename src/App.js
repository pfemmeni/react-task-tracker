import Header from "./components/Header";
import Tasks from "./components/Tasks";
import {useState} from "react";
import AddTask from "./components/AddTask";

function App() {
    const [tasks, setTask] = useState([
        {
            id: 1,
            text: "One",
            day: "today",
            reminder: false
        },
        {
            id: 2,
            text: "Two",
            day: "tmrw",
            reminder: true
        },
        {
            id: 3,
            text: "Three",
            day: "yesterday",
            reminder: false
        }

    ])
    const addTask = (task) => {
        const id = Math.floor(Math.random() * 1000) +1
        const newTask = {id, ...task}
        setTask([...tasks, newTask])
    }
    const deleteTask = (id) => {
        setTask(tasks.filter((task) => task.id !== id))
    }
    const toggleReminder = (id) => {
        setTask(tasks.map((task) => task.id === id ? {...task, reminder: !task.reminder} : task))
    }
    return (
        <div className="container">
            <Header/>
            <AddTask onAdd={addTask}/>
            {tasks.length > 0 ? <Tasks tasks={tasks}
                                       onDelete={deleteTask}
                                       onToggle={toggleReminder}/> : "To tasks to show"}
        </div>
    );
}

export default App;

// https://www.youtube.com/watch?v=w7ejDZ8SWv8
//1:14:53