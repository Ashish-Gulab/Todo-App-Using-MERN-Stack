import React, { useState } from 'react';

import {useDispatch} from "react-redux";

import { addNewTodo } from '../redux/actions';


const TodoForm=()=>{

    const[text,setText]=useState("");

    const dispatch=useDispatch();

    const onFormSubmit=(e)=>{
        e.preventDefault();

        dispatch(addNewTodo(text));
        setText('');
    }

    const addNewItem=()=>{
        // dispatch(addItem(text));
    }

    const onInputChange=(event)=>{
        setText(event.target.value);
    }

    return(
        <form className="form" action="" onSubmit={onFormSubmit}>
            <input placeholder="Enter new Todo Item...." className="input" onChange={onInputChange} value={text}/>
            {/* <button onClick={()=>addNewItem}>Add item</button> */}
        </form>
    );
};

export default TodoForm;