import React, { useEffect, useState } from 'react'
import "../App.css"
import Task from './Task'

const Home = () => {

    let initialArray = localStorage.getItem("tasks") ? JSON.parse(localStorage.getItem("tasks")) : [];

    let [tasks, setTasks] = useState(initialArray);
    let [title, setTitle] = useState("");
    let [description, setDescription] = useState("");

    const submitHandler = (e) => {
        e.preventDefault();
        if (title !== "" && description !== "") {
            setTasks([...tasks, { title, description }]);

            setTitle("");
            setDescription("");
        }
    }

    const deleteTask = (index) => {
        const filteredArray = tasks.filter((val, i) => {
            return i !== index;
        })
        setTasks(filteredArray);

    }

    useEffect(() => {
        localStorage.setItem("tasks", JSON.stringify(tasks));
    }, [tasks])
    return (
        <div>
            <div className="container">
                <h1>Daily Goals</h1>
                <form onSubmit={submitHandler}>
                    <input
                        type="text"
                        placeholder="title"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)} />

                    <textarea
                        placeholder='description'
                        value={description}
                        onChange={(e) => setDescription(e.target.value)} ></textarea>

                    <button type='submit' >Add</button>
                </form>
                {tasks.map((item, index) => (
                    <Task key={index} title={item.title} description={item.description} deleteTask={deleteTask} index={index} />
                    // item.title, item.description
                ))}
            </div>
        </div>
    )
}

export default Home
