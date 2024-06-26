/* eslint-disable react/prop-types */
import { useState } from "react"

export default function EditTaskForm({ task, handleUpdate, handleCancel }) {
    //state
    const [desc, setDesc] = useState(task.desc);
    //comportements
    const handleSubmit = (e) => {
        e.preventDefault();

        if(desc === "") {
            return;
        }
        handleUpdate({...task, desc});
    }

    const handleChange = (e) => {
        setDesc(e.target.value);
    }

    //affichage
    return(
        <>
            <form action='submit' onSubmit={handleSubmit}>
                <button className="btn-edit-valid">M</button>
                <button className="btn-cancel" type="button" onClick={handleCancel}>C</button>
                <input onChange={handleChange} value={desc}  type="text" placeholder='Décrire la tâche' />
            </form>
        </>
    )
}