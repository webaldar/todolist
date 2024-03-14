import React, {useState} from 'react';
import './App.css';
import Todolist from './component/Todolist';


export type taskType = {
    id: number
    title: string
    isDone: boolean
}

export type filterValueType = 'All' | 'Active' | 'Completed'

function App() {
    const [tasks, setTasks] = useState<taskType[]>([
        {id: 1, title: 'HTML CSS', isDone: true},
        {id: 2, title: 'JS', isDone: true},
        {id: 3, title: 'React', isDone: false},
        {id: 4, title: 'Redux', isDone: false},
        {id: 5, title: 'RTK Query', isDone: true},
        {id: 6, title: 'JQuery', isDone: false},
    ])



    const [filter, setFilter] = useState<filterValueType>('All')

    let tasksForTodolist = tasks
    if (filter === 'Active') {
        tasksForTodolist = tasks.filter(tasks => !tasks.isDone)
    }
    if (filter === 'Completed') {
        tasksForTodolist = tasks.filter(tasks => tasks.isDone)
    }

    const removeTask = (taskId: number) => {
        const filteredTasks = tasks.filter(task => {
            return task.id !== taskId
        })
        setTasks(filteredTasks)
    }

    const changeFilter = (filter: filterValueType) => {
        setFilter(filter)
    }

    return (
        <div className="App">
            <Todolist title={'What to learn'} tasks={tasksForTodolist} removeTask={removeTask} changeFilter={changeFilter}/>
        </div>
    );
}

export default App;
