import React,{Component} from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';

import Todos from './components/Todos';
import Header from './components/Layout/Header'
import './App.css';
import { render } from '@testing-library/react';
import Addtodo from './components/Addtodo';
import About from './components/pages/About';
import axios from 'axios';
class App extends Component {
  
   state = {
    todos: [        
    ]
  }

  componentWillMount() {
    axios.get('https://jsonplaceholder.typicode.com/todos?_limit=10')
    .then(res => {this.setState({todos: res.data })})
  }

  changeComplete = (id)=>{
    this.setState({todos: this.state.todos.map(todo=>{
      if(id ===todo.id){
        todo.completed = !todo.completed
      }
      return todo;
    })});
    console.log(id);
  }
  delTodod = (id)=>{
    this.setState({todos: this.state.todos.filter(todo=>todo.id
      !==id) });
  }

  addTodo = (title)=>{
    var newTodo = {
      id: this.state.todos.length + 1,
      title,
      completed: false
    }
    this.setState({todos: [...this.state.todos, newTodo]});
  }

  render(){
  return(
    <Router>
      <div className="App">
        <div className = 'container'>
        <Header />
        <Route exact path="/" render = {props=>(
          <React.Fragment>
            <Addtodo addTodo = {this.addTodo} />
            <Todos todos = {this.state.todos} changeComplete = {this.changeComplete} delTodod = {this.delTodod}/>
          </React.Fragment>
        )} />
        <Route path="/about" render = {props=>(About)} /> 
        </div>
      </div>
    </Router>
  );
  }
}

export default App;
