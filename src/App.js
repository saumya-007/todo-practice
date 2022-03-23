import './App.css';
//bootstrap css file
import 'bootstrap/dist/css/bootstrap.min.css';

import { ToDoList } from './components/ToDoList';
import { useState, useRef, useEffect } from 'react';
import Form from 'react-bootstrap/esm/Form';
import Button from 'react-bootstrap/Button';
import { Container } from 'react-bootstrap';

function App() {

  //useStates
  var [todoList, setToDo] = useState([])
  var [count, setCount] = useState(1);
  //useRef
  var nameToDo = useRef()
  //css
  var main = {
    margin: 'auto',
    width: 400,
  }
  var boxAlert = {
    backgroundColor: "#ffcccc",
    border: "1px solid red",
    color: "red",
    marginTop: "20px",
  }
  var boxSuccess = {
    backgroundColor: "#d7ffc7",
    border: "1px solid green",
    color: "green",
    marginTop: "20px",
  }
  const handleAddToDo = (e) => {
    let flag = 0;
    let name = nameToDo.current.value;
    if (name == '') {
      alert("Empty ToDo input");
      return
    }
    todoList.map(ele => {
      if (ele.name.toUpperCase() == name.toUpperCase()) {
        alert("Can not enter same name");
        flag = 1;
      }
    })
    if (flag != 1) {
      setCount(count + 1);
      setToDo((previousToDo) => {
        return [...previousToDo, { id: count, name: name, completed: false }]
      })
    }
    nameToDo.current.value = "";
  }

  const toggleToDo = (id) => {
    const newToDos = [...todoList]
    const todo = newToDos.find(todo => todo.id === id)
    todo.status = !todo.status;
    setToDo(newToDos);
  }

  const handleClearToDo = (e) => {
    const completed = todoList.filter(todo => !todo.status)
    setToDo(completed)
  }


  return (
    <div className="App">
      <div style={main} >
        <div style={todoList.filter(todo => !todo.status).length ? boxAlert : boxSuccess}>{todoList.filter(todo => !todo.status).length} LEFT TO COMPLETE !</div>
        <Form>
          <Form.Group className="mt-5">
            <Form.Label>Enter ToDo</Form.Label>
            <Form.Control type="text" ref={nameToDo} placeholder="To Do" />
          </Form.Group>
          <Button variant="primary" type="button" onClick={handleAddToDo} className='m-3'>
            Add ToDo
          </Button>
          <Button variant="primary" type="button" onClick={handleClearToDo}>
            Show Only Incomplete ToDos
          </Button>
        </Form>
      </div>

      <ToDoList todoList={todoList} toggleToDo={toggleToDo} />
    </div>
  );
}

export default App;
// 