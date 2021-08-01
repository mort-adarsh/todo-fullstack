import './App.css';
import TodoList from './components/TodoList'
import 'bootstrap/dist/css/bootstrap.min.css'
import React, {Component} from 'react';
import 'font-awesome/css/font-awesome.min.css'

class App extends Component {
  render(){
    return (
      <div className="App">
        <TodoList />
      </div>
    );
  }

}

export default App;
