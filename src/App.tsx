import React from 'react';
import './App.css';
import {TaskType, Todolist} from "./Todolist";

function App() {
    const todolistTitle_1 = "Learn"
    const todolistTitle_2 = "Cook"
    const task_1: Array<TaskType> = [
        {id: 1, title: "HTML", isDone: true},
        {id: 2, title: "JS", isDone: true},
        {id: 3, title: "React", isDone: false},
    ]
    const task_2: Array<TaskType> = [
        {id: 1, title: "keks", isDone: false},
        {id: 2, title: "sandwich", isDone: true},
        {id: 3, title: "mors", isDone: false},
    ]

    return (
        <div className="App">
            <Todolist title={todolistTitle_1} tasks={task_1}/>
            <Todolist title={todolistTitle_2} tasks={task_2}/>
        </div>
    );
}

export default App;
