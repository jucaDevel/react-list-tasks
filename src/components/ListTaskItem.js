import React from 'react'
import {RemoveCircleOutline}from '@mui/icons-material';

export const ListTaskItem = ({toDo,handleToggle,handleDelete,index}) => {
  return (
    <li
        className='list-group-item item-task'
    >
        <p 
            className={`${toDo.done && 'complete'} item-content`}
            onClick={()=>handleToggle(toDo.id)}
        >
            {index + 1}. {toDo.desc}
        </p>
        <button 
            className='btn btn-danger'
            onClick={() => handleDelete(toDo.id)}
            title='Remove task'
        >
            <RemoveCircleOutline />
        </button>
    </li>
  )
}
