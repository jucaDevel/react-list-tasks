import React from 'react'
import { useForm } from '../hooks/useForm';
import {AddTaskOutlined}from '@mui/icons-material';

export const AddTask = ({handleAddToDo}) => {

    const [{description}, handdleInputChange, reset] = useForm({
        description:''
    });

    const handleSubmit = (e)=>{
        e.preventDefault();

        if (description.trim().length <= 1) {
            return;
        }
        const newToDo = {
            id: new Date().getTime(),
            desc: description,
            done: false
        }

        handleAddToDo(newToDo);
        reset();
    }
  return (
    <>
        <h4>Add Task</h4>
        <hr/>
        <form 
            className='form-task'
            onSubmit={handleSubmit}
        >
            <input 
                className='form-control form-add-task'
                type="text" 
                name="description" 
                autoComplete='off'
                placeholder='Add...'
                onChange={handdleInputChange}
            />
            <button 
                type='submit'
                className="btn btn-outline-primary mt-1 btn-block"
                title='Add Task'
            >
                <AddTaskOutlined />
            </button>
        </form>
    </>
  )
}
