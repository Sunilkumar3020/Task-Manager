import { useState } from "react"
import { useTasks } from "../context/TaskContext"

export default function Task({ task }) {
   
    const { dispatch } = useTasks()
    const [isEditing, setIsEditing] = useState(false)
    const [editText, setEditText] = useState(task.text)
    const handleToggle = () => { dispatch({ type: 'TOGGLE_TASK', payload: task.id }) }
    const handleDelete = () => { dispatch({ type: 'DELETE_TASK', payload: task.id }) }
    const handleEdit = () => {
        dispatch({ type: 'UPDATE_TASK', payload: { id: task.id, text: editText } });
        setIsEditing(false)
    }
    return (
        <>
            <li>
                {
                    isEditing ? (
                        <div>
                            <input type="text" value={editText} onChange={(e) => setEditText(e.target.value)} />
                            <button onClick={handleEdit}>Save</button>
                        </div>
                    ) : (
                        <>
                            <span onClick={handleToggle} style={{ textDecoration: task.completed ? 'line-through' : 'none', cursor: "pointer" }}>{task.text}</span>
                            <button onClick={() => setIsEditing(true)}>Edit</button>
                            <button onClick={handleDelete}>Delete</button>
                        </>
                    )
                }
            </li>
        </>
    )
}