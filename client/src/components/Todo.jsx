import React, { useState } from "react";
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import Tooltip from '@mui/material/Tooltip';
import '../App.css';
import {deleteTodo, toggleTodo, updateTodo} from "../redux/actions";
import {useDispatch} from 'react-redux';

const Todo=({todo})=>{

    const [edit, setEdit]=useState();
    const [text, setText]=useState(todo.data);

    const dispatch=useDispatch();

    const onFormSubmit=(e)=>{
        e.preventDefault();

        setEdit(prevState=> !prevState);

        dispatch(updateTodo(todo._id,text));
    }

    return(
        <li className="task" onClick={()=>dispatch(toggleTodo(todo._id))}
            style={{
                textDecoration:todo.done ? 'line-through' : '',
                color: todo.done ? 'black' : '#34495e'
            }}
        >
            <span style={{display:edit ? 'none' : ''}}>{todo.data}</span>

            <form style={{display:edit ? 'inline' : 'none'}} onSubmit={onFormSubmit}>
                <input type="text" value={text} className="edit-todo" onChange={(e)=>setText(e.target.value)} />
            </form>

            <span className='icon' onClick={()=>dispatch(deleteTodo(todo._id))}>
                <Tooltip title="Delete" className="btn_green">
                    <DeleteIcon />
                </Tooltip>
            </span>    
            <span className='icon' onClick={()=>setEdit(prevState => !prevState)}>
                <Tooltip title="Edit">
                        <EditIcon />
                </Tooltip>
            </span>
        </li>
    )
}

export default Todo;