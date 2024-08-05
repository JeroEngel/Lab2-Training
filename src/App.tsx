import React from 'react';
import { useState } from 'react';


function App() {
  const [todo, setTodo] = useState("");
  const [todoList, setTodoList] = useState<string[]>([]);

  const handleForm = (e) =>{
    e.preventDefault();
    setTodoList([...todoList, todo]);
    setTodo("");
  }

  const deleteTodo = (deleteValue) => {
    const newTodoList = todoList.filter((todo) => todo !== deleteValue);
    setTodoList(newTodoList);
  }

  return (
    
      <div className="bg-gray-200 w-full h-screen flex items-center">
        <div className="w-[500px] mx-auto text-center bg-white p-5">
          <h1 className='text-5xl font-bold mb-8'>Todo App</h1>
          <form onSubmit={handleForm}>
            <input className='border-2 border-black w-full p-5 mb-5 text-black placeholder:text-gray-500 rounded-lg' type="text"  placeholder= "Add Todo"value={todo} onChange={(e) => setTodo(e.target.value)} />
            <button type="submit" className='bg-red-600 text-white py-3 px-8 rounded-lg mb-5'>Add Todo</button>
          </form>
          <div className="todo-show-area">
            <ul>
              {todoList.map((todo, index) => (
                <li className='bg-black mb-2 flex justify-between text-white py-5 rounded-lg text-3xl px-5'>
                 {todo}{" "}
                 <span onClick={()=> deleteTodo(todo)}className='text-red-700 cursor-pointer'>x</span> </li>
                          ))}
            </ul>
          </div>
        </div>
      </div>
    
  )
}

export default App
