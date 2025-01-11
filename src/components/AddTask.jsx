import { useState } from "react"
import { useTasks } from "../context/TaskContext"

export default function AddTask() {
    const [task, setTask] = useState('')
    const { dispatch } = useTasks()

    
    const handleAddTask = () => {
        console.log(Boolean(task.trim()));

        if (task.trim()) {
            dispatch({ type: 'ADD_TASK', payload: task })
            setTask('')
        }
        else {
            alert('Please add task ')
        }
    }
    return (<>
        <input type="text" value={task} onChange={(e) => setTask(e.target.value)} placeholder="Add a new task" />
        <button onClick={handleAddTask}>Add Task</button>
    </>)
}