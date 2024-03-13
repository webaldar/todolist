import React from 'react';
import {taskType} from "./App";
import {Button} from "./Button";


type todolistPropsType = {
    title: string
    tasks: taskType[]
    date?: string
}
const Todolist = ({title, tasks, date}: todolistPropsType) => {
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
                        </li>
                    ))

                    }
                </ul>
            )

            }


            <div>
                <Button title={'All'}/>
                <Button title={'Active'}/>
                <Button title={'Completed'}/>
            </div>
            <div>{date}</div>
        </div>
    )
        ;
};

export default Todolist;