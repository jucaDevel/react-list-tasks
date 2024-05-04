import React from 'react'
import { ListTaskItem } from './ListTaskItem'

export const ListTasks = ({ToDos,handleDelete,handleToggle}) => {
    return (
        <>            
            <ul className='list-group list-group-item'>
                {
                    ToDos.map((toDo,i) => (
                        <ListTaskItem
                        key={toDo.id}
                        toDo={toDo}
                        handleToggle = {handleToggle}
                        handleDelete = {handleDelete}
                        index = {i}
                        />
                    ))
                }
            </ul>
        </>
    )
}
