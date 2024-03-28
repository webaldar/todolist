import React from 'react';

type TodolistType = {
    title: string
    tasks: Array<TaskType>
}

export type TaskType = {
    id: number
    title: string
    isDone: boolean
}
export const Todolist = ({title, tasks}: TodolistType) => {
    //const title = title;
    // const tasks = props.tasks;
    // const tasksList: Array<JSX.Element> = [];
    // for (let i = 0; i < tasks.length; i++) {
    //     tasksList.push(
    //         <li><input type="checkbox" checked={tasks[i].isDone}/> <span>{tasks[i].title}</span></li>
    //     )
    // }

    return (
        <div className="todolist">
            <h3>{title}</h3>
            <div>
                <input/>
                <button>+</button>
            </div>
            <ul>
                {
                    tasks.map(task =>
                        <li>
                            <input type="checkbox" checked={task.isDone}/>
                            <span>{task.title}</span>
                        </li>)
                }
            </ul>
            <div>
                <button>All</button>
                <button>Active</button>
                <button>Completed</button>
            </div>
        </div>
    );
};

