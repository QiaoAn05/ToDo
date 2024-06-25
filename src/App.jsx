import { useState } from 'react';
import './App.css';
import { Task } from './components/Task';



function App() {
  //State
 const [tasks, setTasks] = useState([
  { id: 1, desc: "titre de la tâche"},
  { id: 2, desc: "Faire les courses"},
  { id: 3, desc: "Finir le dossier professionnel"},
 ])

 const [ newTaskDesc, setNewTaskDesc ] = useState("");

 const [editingTask, setEditingTask] = useState(null);

//Comportements
const handleSubmit = (e) => {
  e.preventDefault();
  //copie du state
  //manipulation de la copie du state
  const id = new Date().getTime();
  const desc = newTaskDesc;
  const taskToAdd = { id, desc };
  //modification du state
  handleAdd(taskToAdd);
}

const handleAdd = (taskToAdd) => {
//copie du state
const tasksCopy = [...tasks];
//manipulation de la copie du state
tasksCopy.push(taskToAdd);
//modification du state
setTasks(tasksCopy);
setNewTaskDesc("");
}

 const handleChange = (e) => {
  setNewTaskDesc(e.target.value);
 }

const handleDelete = (id) => {
  //copie du state
  const tasksCopy = [...tasks];
  //manipulation de la copie du state
  const tasksCopyUpdated = tasksCopy.filter((task) => task.id !== id);
  //modification du state
  setTasks(tasksCopyUpdated);
}

// const handleEdit = (taskToUpdate) => {
// //copie du state
// const tasksCopy = [...tasks];
// //manipulation de la copie du state
// const tasksCopyUpdated = tasksCopy.map((task) =>
//   task.id === taskToUpdate.id ? taskToUpdate : task,
// );
// //modification du state
// setTasks(tasksCopyUpdated);
// setEditingTask(null);
// }

// Affichage
  return (
    <>
      <header>
        <h1>My ToDo List</h1>
      </header>
      <main>
        <h3>Le 25 Juin 2024</h3>
        <h2>Tâches :</h2>
        <section>
          <ul>
            { tasks.map((task) => (
              <Task
                key={task.id}
                taskInfo={task}
                onClick={()=>{handleDelete(task.id)}}
                onEdit={() => setEditingTask(task)}
              />
            )) }
          </ul>
        </section>
        {!editingTask && (
          <form action='submit' onSubmit={handleSubmit}>
            <button>Ajouter</button>
            <input onChange={handleChange} value={newTaskDesc}  type="text" placeholder='Titre de la tâche' />
          </form>
        )}
        {editingTask && (
          <form action='submit' onSubmit={handleSubmit}>
            <button>Ajouter</button>
            <input onChange={handleChange} value={newTaskDesc}  type="text" placeholder='Titre de la tâche' />
          </form>
        )}
      </main>
    </>
  )
}

export default App
