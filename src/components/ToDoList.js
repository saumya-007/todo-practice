import React from 'react';
import { ToDo } from './ToDo';

export const ToDoList = ({ todoList, toggleToDo }) => {
    return (
        todoList.map(ele => {
            return (
                <ToDo key={ele.id} todoList={ele} toggleToDo={toggleToDo} />
            )
        })
    )
}
