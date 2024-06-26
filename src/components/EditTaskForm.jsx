/* eslint-disable react/prop-types */
import { useState } from "react"

export default function EditTaskForm({ task, handleUpdate, handleCancel }) {
    //state
    const [desc, setDesc] = useState(task.desc);
    //comportements
    const handleSubmit = (e) => {
        e.preventDefault();
        handleUpdate({...task, desc});
    }

    const handleChange = (e) => {
        setDesc(e.target.value);
    }

    //affichage
    return(
        <>
            <form action='submit' onSubmit={handleSubmit}>
                <button className="btn-edit-valid">Modifier</button>
                <button className="btn-cancel" type="button" onClick={handleCancel}>Annuler</button>
                <input onChange={handleChange} value={desc}  type="text" placeholder='Décrire la tâche' />
            </form>
        </>
    )
}