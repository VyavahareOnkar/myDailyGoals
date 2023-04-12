import React from 'react'
import "../App.css"

const Task = ({ title, description, deleteTask, index}) => {


    return (

        < div className="tasks" >
            <div >
                <p>{title}</p>
                <span>{description}</span>
            </div>

            <button onClick={()=>deleteTask(index)}>-</button>
        </div>

    )
}

export default Task;
