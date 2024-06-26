import { useState } from 'react';
import './App.css';
import Task from './components/Task';
import TaskForm from './components/TaskForm';
import EditTaskForm from './components/EditTaskForm';



function App() {
  //State
 const [tasks, setTasks] = useState([
  { id: 1, desc: "titre de la tâche"},
  { id: 2, desc: "Faire les courses"},
  { id: 3, desc: "Finir le dossier professionnel"},
 ])

 const [editingTask, setEditingTask] = useState(null);

//Comportements

const handleAdd = (taskToAdd) => {
//copie du state
const tasksCopy = [...tasks];
//manipulation de la copie du state
tasksCopy.push(taskToAdd);
//modification du state
setTasks(tasksCopy);
}

const handleDelete = (id) => {
  //copie du state
  const tasksCopy = [...tasks];
  //manipulation de la copie du state
  const tasksCopyUpdated = tasksCopy.filter((task) => task.id !== id);
  //modification du state
  setTasks(tasksCopyUpdated);
}

const updateTask = (taskToUpdate) => {
  //copie du state
  const tasksCopy = [...tasks];
  //manipulation sur la copie du state
  const tasksCopyUpdated = tasksCopy.map((task) => task.id === taskToUpdate.id ? taskToUpdate : task);
  //modifier le state avec le setter
  setTasks(tasksCopyUpdated);
  setEditingTask(null);
}

// Affichage
  return (
    <>
      <header>
        <h1>My ToDo List</h1>
        <p>Bienvenue dans My ToDo List ! Dans cette application vous pouvez planifier les tâches de votre journée en les ajoutants ou les modifiants. Quand vous en avez finis, il vous suffit de les supprimer.</p>
      </header>
      <main>
        <h2>Ma Journée</h2>
        <p>Le 25 Juin 2024</p>
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
          <TaskForm handleAdd={handleAdd}/>
        )}
        {editingTask && (
          <EditTaskForm
            task={editingTask}
            handleUpdate={updateTask}
            handleCancel={()=>{setEditingTask(null)}}
          />
        )}
      </main>
    </>
  )
}

export default App
