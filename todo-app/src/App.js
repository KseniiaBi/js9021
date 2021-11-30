import delIcon from './delete.png';
import editIcon from './edit.png';
import './App.css';
import React from 'react';


class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      todos: []
    }
    this.saveTask = this.saveTask.bind(this);
    this.deleteTask = this.deleteTask.bind(this);
    this.editTask = this.editTask.bind(this);
  }

  saveTask(event){
    event.preventDefault();
    const inp = document.getElementById('todoinput');
    let task = inp.value;
    if(task.length > 0){

      let todosCopy = this.state.todos.slice();

      let todo = {
        task: task,
        id: Date.now()
      }

      todosCopy.push(todo);

      this.setState({
        todos: todosCopy
      });

      inp.value = '';
    }
  }

  editTask(id){

  }

  deleteTask(id){
    let todosCopy = this.state.todos.slice();
    todosCopy.forEach((item,index) => {
      if(item.id === id){
        todosCopy.splice(index,1);
      }
    });
    this.setState({
      todos: todosCopy
    });
  }

  render(){
    return (
      <div className="todoapp">
        <form onSubmit={this.saveTask} className="todoform">
          <input id="todoinput" type="text" placeholder="type your task here" />
          <input type="submit" value="Save" />
        </form>

        <div className="todocontent">
            {     this.state.todos.length > 0 ?
                                      <List todos={this.state.todos} del={this.deleteTask} />
                                      :<h2>Any tasks yet, type your first at form below</h2>
            }

        </div>

      </div>
    );
  }
}


function List(props){
  return(
    <ol className="todolist">
       {
          props.todos.length > 0 ?
            props.todos.map(item => <Todo key={item.id} id={item.id} text={item.task} del={props.del} /> )
            : null
        }
    </ol>
  );
}


function Todo(props){
  return(
    <li id={props.id}>
       {props.text}
       <img width="30" src={delIcon} alt="delete" onClick={() => props.del(props.id)} />
    </li>
  );
}


export default App;
