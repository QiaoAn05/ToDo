/* eslint-disable react/prop-types */
export default function Task({ taskInfo, onClick, onEdit }) {
    //state
    //comportements
    //affichage
    return (
        <>
            <li>
                <button onClick={onEdit}>M</button>
                <button onClick={onClick}>X</button>
                {taskInfo.desc}
            </li>
        </>
    );
}