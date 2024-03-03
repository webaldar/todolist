import React from 'react';
import './App.css';
import Todolist from './Todolist';


type taskType = {
    id: number
    title: string
    isDone: boolean
}
function App() {
    const tasks1: Array<taskType> = [
        {id: 1, title: 'HTML CSS', isDone: true},
        {id: 2, title: 'JS', isDone: true},
        {id: 3, title: 'React', isDone: false},
    ]
    const tasks2: Array<taskType> = [
        {id: 1, title: 'Wondeful', isDone: true},
        {id: 2, title: 'My song', isDone: false},
        {id: 3, title: 'Word of Tunder', isDone: false},
    ]
    return (
        <div className="App">
            <Todolist title={'What to learn'} tasks={tasks1} date={'20.02.2024'}/>
            <Todolist title={'Song'} tasks={tasks2}/>

        </div>
    );
}

export default App;
