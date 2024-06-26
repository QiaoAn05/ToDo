/* eslint-disable react/prop-types */
export default function Task({ taskInfo, onClick, onEdit }) {
    //state
    //comportements
    //affichage
    return (
        <>
            <li>
                {taskInfo.desc}
                <button onClick={onEdit}>Modifier</button>
                <button onClick={onClick}>X</button>
            </li>
        </>
    );
}