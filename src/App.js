import {useState, useEffect} from 'react'
import "./App.css"
import Form from './components/Form'
import List from './components/List'
import Footer from './components/Footer'

function App() {

  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState("");
  const [filtered, setFiltered] = useState([]);

  useEffect(() => {

  const filterHandler = () => {
    switch (status) {
      case "completed":
        setFiltered(todos.filter(todo => todo.completed === true))
        
        break;
        case "active":
        setFiltered(todos.filter(todo => todo.completed === false))
          
        break;
    
      default:
        setFiltered(todos) 
        break;
    }
  }
  filterHandler()
  }, [todos,status])


  return (
    <div className='todoapp'>

    <Form todos={todos} setTodos={setTodos} todo={todos.todo}/>

    <ul className='todo-list'>
      {filtered.map((todo) =>(
        <List status={status} key={todo.id} todo={todo}
         text = {todo.text} todos={todos} setTodos={setTodos}
        />
      ))}
    </ul>
    
    <Footer
          status= {status}
          setStatus={setStatus}
          todos={todos}
          setTodos={setTodos}
          />
    
    </div>
  )
}

export default App