import React from 'react';
import './App.css';
import Todolist from './component/Todolist';


export type taskType = {
    id: number
    title: string
    isDone: boolean
}
function App() {
    const tasks1: Array<taskType> = [
        {id: 1, title: 'HTML CSS', isDone: true},
        {id: 2, title: 'JS', isDone: true},
        {id: 3, title: 'React', isDone: false},
        {id: 4, title: 'Redux', isDone: false},
        {id: 5, title: 'RTK Query', isDone: true},
        {id: 6, title: 'JQuery', isDone: false},
    ]


    return (
        <div className="App">
            <Todolist title={'What to learn'} tasks={tasks1} date={'20.02.2024'}/>
        </div>
    );
}

export default App;
