import React, { Component } from 'react'
import PropTypes from 'prop-types';

export class TodoItem extends Component {


    getStyle = ()=>{
        return {
            background: '#f4f4f4',
            padding: '10px',
            borderBottom:'1px #ccc dotted',
            color : (this.props.todo.completed)?'red':'black'
            
        }
    }
    // changeComplete = ()=>{
    //     this.props.todos.completed = ~this.props.todos.completed;
    // }
    render() {
        const {id,title} = this.props.todo
        return (
            <div style = {this.getStyle()}>
                <input type = 'checkbox' onChange ={this.props.changeComplete.bind(this,id)} />
                {' '}
                {title}
                <button onClick = {this.props.delTodo.bind(this,id)} style = {btnStyle}>X</button>
            </div>
        )
    }
}

const btnStyle = {
    background: 'red',
    color: 'white',
    border: '1px black solid',
    padding: '5px 10px',
    borderRadius: '100%',
    cursor: 'poiter',
    float: 'right'
}

TodoItem.propTypes = {
    todo: PropTypes.object.isRequired
  }

export default TodoItem
