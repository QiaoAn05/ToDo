import { useState } from "react"

export default function TaskForm({ handleAdd }) {
    //state
    const [newTaskDesc, setNewTaskDesc] = useState("");
    //comportements
    const handleSubmit = (e) => {
        e.preventDefault();
        //copie du state
        //manipulation de la copie du state
        const id = new Date().getTime();
        const desc = newTaskDesc;
        const taskToAdd = { id, desc };
        //modification du state
        handleAdd(taskToAdd);
        setNewTaskDesc("");
      }

      const handleChange = (e) => {
        setNewTaskDesc(e.target.value);
       }
       
    //affichage
    return(
        <>
            <form action='submit' onSubmit={handleSubmit}>
                <button>Ajouter</button>
                <input onChange={handleChange} value={newTaskDesc}  type="text" placeholder='Titre de la tâche' />
            </form>
        </>
    )
}