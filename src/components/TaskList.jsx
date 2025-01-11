
import React from "react";
import { useTasks } from "../context/TaskContext";
import Task from "./Task";
export default function TaskList() {
    const { tasks } = useTasks();
    return (
        <>
            <ul>
                {tasks.map(task => (<Task key={task.id} task={task} />))}
            </ul>
        </>
    )
}