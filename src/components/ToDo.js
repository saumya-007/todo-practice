import React from 'react'

export const ToDo = ({ todoList, toggleToDo }) => {

    var tableDiv = {
        margin: 'auto',
        width: 600,
    }
    const handleToDoClick = () => {
        toggleToDo(todoList.id);
    }
    return (
        <div style={tableDiv}>
            <div className='row'>
                <div className='col'>
                    {todoList.name}
                </div>
                <div className='col'>
                    <input type="checkbox" onChange={handleToDoClick}></input>
                </div>
            </div>
        </div>
    )
}
