import { createContext, useContext, useReducer } from "react";
import { taskReducer } from "../reducers/taskReducer";

const TaskContext = createContext();

const TaskProvider = ({ children }) => {
    const [tasks, dispatch] = useReducer(taskReducer, [])
    return (
        <TaskContext.Provider value={{ tasks, dispatch }}>
            {children}
        </TaskContext.Provider>
    )
}

export const useTasks = () => useContext(TaskContext)


export default TaskProvider;