import React from 'react';
import './App.css';
import Todolist from './Todolist';
import * as string_decoder from 'string_decoder';

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
            <Todolist title={'What to learn'} task={tasks1}/>
            <Todolist title={'Song'} task={tasks2}/>

        </div>
    );
}

export default App;
