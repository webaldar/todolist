import React, {useState} from 'react';
import './App.css';
import Todolist from './component/Todolist';


export type taskType = {
    id: number
    title: string
    isDone: boolean
}
function App() {
    const [tasks, setTasks] = useState<taskType[]>([
        {id: 1, title: 'HTML CSS', isDone: true},
        {id: 2, title: 'JS', isDone: true},
        {id: 3, title: 'React', isDone: false},
        {id: 4, title: 'Redux', isDone: false},
        {id: 5, title: 'RTK Query', isDone: true},
        {id: 6, title: 'JQuery', isDone: false},
    ])

    const [filter, setFilter] = useState('All')
    let tasksForTodolist = tasks
    if (filter === 'Active'){
        tasksForTodolist = tasks.filter(tasks => tasks.isDone === false)
    }
    if (filter === 'Completed'){
        tasksForTodolist = tasks.filter(tasks => tasks.isDone === true)
    }

    const removeTask = (taskId: number) => {
        const filteredTasks = tasks.filter(task => {
            return task.id !== taskId
        })
        setTasks(filteredTasks)
    }

    return (
        <div className="App">
            <Todolist title={'What to learn'} tasks={tasksForTodolist}  removeTask={removeTask}/>
        </div>
    );
}

export default App;
