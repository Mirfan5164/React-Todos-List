import React, { useState } from 'react'

const AddTodo = (props) => {
    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");

    const submit = (e) => {
        e.preventDefault();
        if (!title || !desc) {
            alert("Title and Description cannot be empty!");
        } else {
            props.addTodo(title, desc);
            setTitle("");
            setDesc("");
        }

    }
    return (
        <div className='container my-3'>
            <h3>Add a Todo</h3>
            <form onSubmit={submit}>
                <div className="mb-3">
                    <label htmlFor="title" className="from-label">Todo Title</label>
                    <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} className="form-control" id="title" placeholder="Title" />
                </div>
                <div className="mb-3">
                    <label htmlFor="desc" className="from-label">Password</label>
                    <input type="text" value={desc} onChange={(e) => setDesc(e.target.value)} className="form-control" id="desc" placeholder="Description" />
                </div>
                <div className="mb-3">
                    <button type="submit" className="btn btn-sm btn-success mb-3">Add Todo</button>
                </div>
            </form>
        </div>
    )
}

export default AddTodo
