import AddTask from "./components/AddTask";
import Filter from "./components/Filter";
import TaskList from "./components/TaskList";
import TaskProvider from "./context/TaskContext";

export default function App() {
  return (
    <TaskProvider>
      <h1>Task Manager</h1>
      <AddTask />
      {/* <Filter /> */}
      <TaskList />
    </TaskProvider>
  )
}