import React, { useEffect, useReducer } from 'react'
import { toDoReducer } from "./toDoReducer";
import { useForm } from '../hooks/useForm';
import { ListTasks } from './ListTasks';
import { AddTask } from './AddTask';

const initialState = [{
    id: new Date().getTime(),
    desc: 'Aprender React',
    done: false
}]

const init = () =>{
   return JSON.parse(localStorage.getItem('todos')) || []; /** Capturar elementos del localStorage usando un ternario, en caso de que venga null retornar un array vacio*/
}
export const ListTasksApp = () => {

    const [toDos, dispatch] = useReducer(toDoReducer, initialState, init);

    useEffect(() => {
      localStorage.setItem('todos', JSON.stringify( toDos ))
    }, [toDos])
    
    const handleDelete = (toDoId) =>{
        const action = {
            type: 'delete',
            payload: toDoId
        };

        dispatch(action);
        
    }

    const handleToggle = (toDoId) =>{
        dispatch({
          type:'toggle',
          payload: toDoId  
        });
    };


    const handleAddToDo = (newToDo) =>{
        dispatch({
            type:'add',
            payload: newToDo
        })
    }

    const handleDeleteAll = () => {
        dispatch({
            type: 'delete-all',
        })
    }

  return (
    <>
        <div className='header-list'>
            <h1>Tasks to Do ( {toDos.length} )</h1>
            <button
            className='btn btn-danger'
            onClick={() => handleDeleteAll()}
            > Clean board 
            </button>
        </div>
        <div className='header-list'>
            <form
                className='form-task'
                // onSubmit={handleSubmit}
            >
                <input 
                    className='form-control'
                    type="text" 
                    name="keyWord" 
                    autoComplete='on'
                    placeholder='filter...'
                    // onChange={handdleInputChange}
                />
            </form>
        </div>
        <hr/>

        <div className='row'>
            <div className='col-7'>
                <ListTasks
                    ToDos = {toDos}
                    handleDelete = {handleDelete}
                    handleToggle={ handleToggle}
                />
            </div>

            <div className='col-5'>
                <AddTask
                    handleAddToDo = {handleAddToDo}
                />
            </div>
        </div>

    </>
  )
}
