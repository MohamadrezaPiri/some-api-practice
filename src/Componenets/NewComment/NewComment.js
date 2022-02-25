
import React, { useState } from 'react';
import styles from './NewComment.module.css';
import axios from 'axios';

function NewComment({ setComments }) {

    const [comment, setComment] = useState({
        name: "",
        email: "",
        body: ""
    })

    const changeHandler = (e) => {
        setComment({ ...comment, [e.target.name]: e.target.value })
        console.log(comment)
    }

    const clickHandler = () => {
        axios.post('http://localhost:3001/comments', comment)
            .then(res => axios.get('http://localhost:3001/comments'))
            .then(res => setComments(res.data))
            .catch(error => console.log(error))

    }



    return (
        <div className={styles.newCommentDiv}>
            <h1>Add a new comment</h1>
            <div>
                <label htmlFor="name">name: </label>
                <input onChange={changeHandler} name="name" id='name' type="text" />
            </div>
            <div>
                <label htmlFor="email">email: </label>
                <input onChange={changeHandler} name="email" id='email' type="email" />
            </div>
            <div>
                <label htmlFor="body">body: </label>
                <textarea onChange={changeHandler} name="body" id='body' cols="75" rows="3"></textarea>
            </div>
            <button onClick={clickHandler}>Confirm</button>
        </div>
    )
}

export default NewComment