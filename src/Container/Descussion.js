import React, { useEffect, useState } from 'react';
import Comment from '../Componenets/Comment/Comment';
import FullComment from '../Componenets/FullComment/FullComment';
import NewComment from '../Componenets/NewComment/NewComment';
import './Descussion.css';
import axios from 'axios';
import { toast } from 'react-toastify';


function Descussion() {
    const [comments, setComments] = useState(null);
    const [selectedId, setSelectedId] = useState(null);


    useEffect(() => {
        axios.get('http://localhost:3001/comments')
            .then(res => setComments(res.data))
            .then(res=>toast.info("You can see the full comment by clicking on that"))
            .catch(error => console.log(error))
    }, [])

    //handlers
    const clickHandler = (id) => {
        setSelectedId(id)
    }


    return (
        <div>
            <section className="comment">
                {!comments ? <h1>loading...</h1> : comments.map(c => {
                    return <Comment onClick={() => clickHandler(c.id)} key={c.id} name={c.name} email={c.email} comments={comments} />
                })}
            </section>
            <section className='fullComment'><FullComment setComments={setComments} commentId={selectedId} /></section>
            <section className='newComment'><NewComment setComments={setComments} /></section>
        </div>
    )
}

export default Descussion;