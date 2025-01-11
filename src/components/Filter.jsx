import { useState } from "react"
import { useTasks } from "../context/TaskContext"
export default function Filter() {
    const [filter, setFilter] = useState('all')
    const { tasks } = useTasks();
    const filteredTask = tasks.filter((task) => {

        if (filter === 'active') return !task.completed;
        if (filter === 'completed') return task.completed;
        return true
    })
    return (
        <>
            <button onClick={() => setFilter('all')}>All</button>
            <button onClick={() => setFilter('active')}>Active</button>
            <button onClick={() => setFilter('completed')}>Completed</button>
            <ul>
                {
                    filteredTask.map(task => {
                        return <li key={task.id}>{task.text}</li>
                    })
                }
            </ul>
        </>
    )
}