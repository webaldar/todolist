import React from 'react';
import './App.css';
import {TaskType, Todolist} from "./Todolist";

function App() {
    const todolistTitle_1 = "Learn"
    const todolistTitle_2 = "Cook"
    const tasks_1: Array<TaskType> = [
        {id: 1, title: "HTML", isDone: true},
        {id: 2, title: "JS", isDone: true},
        {id: 3, title: "React", isDone: false},
    ]
    const tasks_2: Array<TaskType> = [
        {id: 1, title: "keks", isDone: false},
        {id: 2, title: "sandwich", isDone: true},
        {id: 3, title: "mors", isDone: false},
        {id: 4, title: "lemonade", isDone: true},
    ]

    return (
        <div className="App">
            <Todolist title={todolistTitle_1} tasks={tasks_1}/>
            <Todolist title={todolistTitle_2} tasks={tasks_2}/>
        </div>
    );
}

export default App;
