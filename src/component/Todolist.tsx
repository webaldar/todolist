import React from 'react';
import {filterValueType, taskType} from '../App';
import {Button} from "./Button";


type todolistPropsType = {
    title: string
    tasks: taskType[]
    date?: string
    removeTask: (taskId: number) => void
    changeFilter: (filter: filterValueType) => void
}
const Todolist = ({title, tasks, date, removeTask, changeFilter}: todolistPropsType) => {
    return (
        <div>
            <h3>{title}</h3>
            <div>
                <input/>
                <button>+</button>
            </div>

            {tasks.length === 0 ? (
                <p>Нет заданий</p>
            ) : (
                <ul>
                    {tasks.map(t => (
                        <li key={t.id}>
                            <input type="checkbox" checked={t.isDone}/>
                            <span>{t.title}</span>
                            <Button title={'x'} onClick={() => removeTask(t.id)}/>
                        </li>
                    ))

                    }
                </ul>
            )
            }
            <div>
                <Button title={'All'} onClick={() => changeFilter('All')}/>
                <Button title={'Active'} onClick={() => changeFilter('Active')}/>
                <Button title={'Completed'} onClick={() => changeFilter('Completed')}/>
            </div>
            <div>{date}</div>
        </div>
    )
        ;
};

export default Todolist;