import axios from 'axios';
import React, { useEffect, useState } from 'react';
import styles from './FullComment.module.css';
import { toast } from 'react-toastify';

function FullComment({ commentId, setComments }) {
  const [comment, setComment] = useState(null)

  useEffect(() => {
    if (commentId) {
      axios.get(`http://localhost:3001/comments/${commentId}`)
        .then(response => setComment(response.data))
        .catch(error => console.log(error))
    }
  }, [commentId])

  const deleteHandler = () => {
    axios.delete(`http://localhost:3001/comments/${commentId}`)
      .then(response => axios.get('http://localhost:3001/comments'))
      .then(response => setComments(response.data))
      .then(response => setComment(null))
    toast.success("The comment has been deleted seccessfully")
      .catch(error => console.log(error))
  }


  let commentDetail = <h3>please select a comment</h3>;


  if (comment) {
    commentDetail = <div className={styles.fullCommentDiv}>
      <p> {comment.name}</p>
      <p> {comment.email}</p>
      <p>{comment.body} </p>
      <button onClick={deleteHandler}>Delete</button>
    </div>
  }
  return commentDetail;
}

export default FullComment;