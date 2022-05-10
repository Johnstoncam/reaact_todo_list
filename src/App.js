import './App.css';
import React, {useState} from 'react';

function App() {

  const [tasks, setTasks] = useState([
    { name: "Kick a baby", isDone: false, priority: false },
    { name: "Drink bleach", isDone: false, priority: false }, 
    { name: "Buy beans", isDone: false, priority: false }
  ])

  const [newTask, setNewTask] = useState("")
  
  const taskNodes = tasks.map((task, index) => { 
    return(
        <li key={index} className={task.isDone ? "done" : "not-done"}>
          
        <span>{task.name} {task.priority}</span>
        {task.isDone ? <span className="done">Sorted!</span> : <button onClick={() => doTask(index)}>Mark as Done</button>}</li> 
    )
});

  const doTask = ((index) => {
    const copyTasks = [...tasks]
    copyTasks[index].isDone = true
    setTasks(copyTasks)
  });

  const handleTaskInput = (event) => {
    setNewTask(event.target.value)
  };

  const handleHighPriorityInput = (event) => {
    setNewTask
  }

  

  const saveNewTask = ((event) => {
    event.preventDefault()
    const copyTask = [...tasks, {name: newTask, isDone: false, priority: highPriority}]
    // copyItem.push({name: newItem, isPurchased: false})
    setTasks(copyTask)
    setNewTask("")
  });

  return (
    <div className="App">

      <h1>ToDo's</h1>
      

      

      <form onSubmit={saveNewTask}>
      <label htmlFor="new-task">Add a new task:</label>
        <input id="new-task" type="text" onChange={handleTaskInput} value={newTask}/>
        <input id="high" type="radio" name="priority" onChange={handleHighPriorityInput} value={highPriority}/>
        <label htmlFor="high">High</label>
        <input id="low" type="radio" name="priority" onChange={handleLowPriorityInput} value={lowPriority}/>
        <label htmlFor="low">Low</label>
        <input type="submit" value="Save New Task"/>
      </form>

      <ul>
        {taskNodes}
      </ul>

    </div>
  );


}

export default App;
