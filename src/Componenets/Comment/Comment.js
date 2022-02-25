import React from 'react';
import styles from './Comment.module.css';

function Comment({ comments, name, email, onClick }) {

    return (
        <div onClick={onClick} className={styles.commentDiv}>
            <p><span>name:</span> {name}</p>
            <p><span>email:</span> {email}</p>
        </div>
    )
}

export default Comment;