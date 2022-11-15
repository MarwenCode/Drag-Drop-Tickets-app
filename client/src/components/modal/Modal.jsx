import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import BackLog from "../backlog/BackLog";
import "./modal.scss"

const Modal = () => {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [comment, setComment] = useState("");


    const [updateTitle, setUpdateTitle] = useState("");
    const [updateDescription, setUpdateDescription] = useState("");
    const [updateComment, setUpdateComment] = useState("");


    const updateCard = (e) => {
        e.preventDefault();
        const updatedCard = {
            
        }

    }



  return (
    <>
    {/* <div className="backlog-section">
    <BackLog />

    </div> */}
    <div className='modal'>
     
      
        <section className='form'>
            <input 
            className="title"
            type="text"
            placeholder="write a title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            
            
            />
            <p></p>

            <div className="items-desc">
            <span>Description</span>
            <textarea 
            className="description"
            placeholder="write a description"
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            
            />

            </div>

            <div className="items-comment">
            <span>Activities</span>
            <textarea
            className="comment"
            type="text"
            placeholder="write a comment"
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            
            />

            </div>
          
       
            

        </section>
        <button className="updateBtn">Submit</button>
        <Link  to="/" >
        <button className="updateBtn"    >Cancel</button>
        
        </Link>
    

    </div>
    
    
    </>
    
  )
}

export default Modal