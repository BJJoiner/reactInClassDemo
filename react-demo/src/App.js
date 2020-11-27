import React, { Component }  from 'react';
import logo from './logo.svg';
import './App.css';
import TaskList from './TaskList';

class App extends Component {
    constructor(){
        super()
        this.state = {
            todoList: [],
            deleteList: [],
            task: '',
            
        }
    }
    render(){
        return (
            <div className="App">
                <h1>To-do List</h1>
                <form onSubmit={(e) =>this.addTodo(e)}>
                    <input
                        type='text'
                        className='input'
                        placeholder='Enter Todo Item'
                        value={this.state.task}
                        onChange={(e) => this.setState({task: e.target.value})}
                    />
                    <button type='submit'>Add Todo</button>
                </form>
                <TaskList title={'Pending Todo'} buttonText={'Done'} tasks={this.state.todoList} buttonFunction={this.removeTodo} />
                <TaskList title={'Completed'} buttonText={"Delete"} tasks={this.state.deleteList} buttonFunction={this.deleteTodo} />
            </div>
        );
    }
    addTodo(e){
        e.preventDefault();
        console.log(this.state.task)
        this.setState({task: '', todoList: [ ...this.state.todoList, this.state.task] });
    }
    removeTodo = key =>{
        console.log(key)
        let todoList = this.state.todoList;
        let index = todoList.indexOf(key);
        let deleteList = this.state.deleteList;
        if(index > -1){
            todoList.splice(index, 1);
            deleteList.push(key);
            this.setState({todoList: todoList, deleteList: deleteList});
        }
    }

    deleteTodo = key =>{
        console.log(key)
        let deleteList = this.state.deleteList;
        let index = deleteList.indexOf(key);
        if(index > -1){
            deleteList.splice(index, 1);
            this.setState({deleteList: deleteList});
        }
       
    }
    
}

export default App;
