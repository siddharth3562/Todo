import React, {useState} from "react";
import axios from 'axios';

const AddTask = () => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');

    const handleSubmit= (e) => {
        e.preventDefault();
        axios.post('https://aswanth74.pythonanywhere.com/api/tasks/', {title,description})
        .then(response => {
            console.log(response.data);
            setTitle('');
            setDescription('');
        })
        .catch(error=>console.log(error));
    }

    return(
        <div className="container">
            <form onSubmit={handleSubmit}>
                <h2 className="text-info"><u>Add Task</u></h2>
            
            <div>
                <label className="txt-dark">Title</label>
                <input type="text" className="form-control" value={title} onChange={(e) => setTitle(e.target.value)} />

            </div>
            <div className="mt-2">
                <label>Description</label>
                <textarea className="form-control" value={description} onChange={(e) => setDescription(e.target.value)}/>
            
            </div>
            <button type="submit" className="btn btn-success mt-3">Add Task</button>
            </form>
        </div>
    );
}

export default AddTask