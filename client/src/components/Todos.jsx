import { useEffect } from "react";
import {useDispatch, useSelector} from 'react-redux';
import { deleteTodo, getAllTodos } from "../redux/actions/index";
import Todo from "./Todo";
import Tabs from "./Tabs";
import { ACTIVE_TODOS, ALL_TODOS, DONE_TODOS } from "../redux/actions/type";

export const Todos=()=>{

    const dispatch=useDispatch();

    const todos=useSelector(state=>state.todos);
    const currentTab=useSelector(state=>state.currentTab);

    useEffect(()=>{
        dispatch(getAllTodos());
    },[]);

    const getTodos=()=>{
        if(currentTab===ALL_TODOS)
        {
            return todos;
        }
        else if(currentTab===ACTIVE_TODOS)
        {
            return todos.filter(todo=>!todo.done)
        }
        else if(currentTab===DONE_TODOS)
        {
            return todos.filter(todo=>todo.done)
        }
    }

    const removeDoneTodos=()=>{
        todos.forEach(({done, _id})=>{
            if(done){
                dispatch(deleteTodo(_id));
            }
        })
    }

    return(
        <article>
            <div>
                <Tabs currentTab={currentTab}/>
                {
                    todos.some(todo=> todo.done) ? (
                        <button onClick={removeDoneTodos} className="button clear">Remove Marked</button>
                    ): null
                }
            </div>
            <ul>
                {
                    getTodos().map(todo=>{
                        return(<Todo todo={todo} key={todo._id}/>)
                    })
                }
            </ul>
        </article>
    )
};

export default Todos;