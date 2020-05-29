import React, { Component } from 'react'

export class Addtodo extends Component {
    state = {
        title: ''
    }
    
    onSubmit = (e) => {
        e.preventDefault();
        this.props.addTodo(this.state.title);
        this.setState({title:''}); 
    }

    onChage = (e) => this.setState({ title: e.target.value });  
    render() {
        return (
            <form onSubmit = {this.onSubmit} style = {{display: 'flex'}} >
                <input 
                type = 'text' 
                name= 'title' 
                style = {{flex: 11, padding: '5px'}} 
                placeholder = 'Add Todo' 
                value = {this.state.title} 
                onChange = {this.onChage}
                />
                
                <input type = 'submit' value = 'Submit' className = 'btn' style = {{flex:1}}></input>
            </form>
        )
    }
}

export default Addtodo
