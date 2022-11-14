import React, { useState, useEffect } from "react";
import "./modal.scss"

const Modal = () => {
    const [title, setTitle] = useState();
    const [description, setDescription] = useState();
    const [comment, setComment] = useState();


    const updateCard = (e) => {
        e.preventDefault();
        const updatedCard = {
            
        }

    }



  return (
    <div className='modal'>
        <section className='form'>
        <span>Title</span>
            <input 
            className="title"
            type="text"
            placeholder="write a title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            
            
            />
            <span>Description</span>
            <textarea 
            className="description"
            placeholder="write a description"
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            
            />
             <span>Activities</span>
            <textarea
            className="comment"
            type="text"
            placeholder="write a comment"
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            
            />
            

        </section>
        <button className="updateBtn">Submit</button>

    </div>
  )
}

export default Modal