import React from 'react';

type taskType = {
    id: number
    title: string
    isDone: boolean
}
type todolistPropsType = {
    title: string
    tasks: taskType[]
}
const Todolist = ({title, tasks}: todolistPropsType) => {
    return (
        <div>
            <h3>{title}</h3>
            <div>
                <input/>
                <button>+</button>
            </div>
            <ul>
                <li>
                    <input type="checkbox" checked={tasks[0].isDone}/> <span>{tasks[0].title}</span>
                </li>
                <li>
                    <input type="checkbox" checked={tasks[1].isDone}/>
                    <span>{tasks[1].title}</span>
                </li>
                <li>
                    <input type="checkbox" checked={tasks[2].isDone}/>
                    <span>{tasks[2].title}</span>
                </li>
            </ul>
            <div>
                <button>All</button>
                <button>Active</button>
                <button>Completed</button>
            </div>
        </div>
    );
};

export default Todolist;