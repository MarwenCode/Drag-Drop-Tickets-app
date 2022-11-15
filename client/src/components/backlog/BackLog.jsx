import React, { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import Modal from "../modal/Modal";
import { AiOutlineEdit } from "react-icons/ai";
import "./backlog.scss";
import SingleTicket from "../singleTicket/SingleTicket";

const getTicketLocal = () => {
  let description = localStorage.getItem("description");
  if (description) {
    return JSON.parse(localStorage.getItem("description"));
  } else {
    return [];
  }
};

const BackLog = () => {
  const [description, setDescription] = useState("");
  const [inputField, setInputField] = useState(getTicketLocal());
  const [addTicketMode, setAddTicketMode] = useState(false);

  // const location = useLocation();
  // console.log(location);
  // // const path = location.pathname.split("/")[2];
  // // console.log(path);

  const addTicket = (e) => {
    e.preventDefault();
    const newTicket = {
      id: new Date().getTime().toString(),
      description: description,
    };

    setInputField([...inputField, newTicket]);
    setDescription("");
    setAddTicketMode(false);
  };
  console.log(inputField);

  useEffect(() => {
    localStorage.setItem("description", JSON.stringify(inputField));
  }, [inputField]);

  // const getModal = () => {

  // }

  const dragItem = useRef();
  const dragOverItem = useRef();

  const dragStart = (e, position) => {
    dragItem.current = position;
    console.log(e.target.innerHTML);
  };

  const dragEnter = (e, position) => {
    dragOverItem.current = position;
    console.log(e.target.innerHTML);
  };

  const drop = () => {
    const copyListItems = [...inputField];
    const dragItemContent = copyListItems[dragItem.current];
    copyListItems.splice(dragItem.current, 1);
    copyListItems.splice(dragOverItem.current, 0, dragItemContent);
    dragItem.current = null;
    dragOverItem.current = null;
    setInputField(copyListItems);
  };

  return (
    <div className="backlog">
      <div className="section">
        <h1 className="title">Backlog</h1>
        <div className="color"></div>
        {!addTicketMode && (
          <button
            className="addCardBtn"
            onClick={() => setAddTicketMode((prev) => !prev)}>
            + add a card
          </button>
        )}

        {addTicketMode && (
          <form>
            <textarea
              className="inputField"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </form>
        )}

        <div className="center">
          {inputField.map((desc, index) => (
            <div className="description" key={index}  
            onDragStart={(e) => dragStart(e, index)}
            onDragEnter={(e) => dragEnter(e, index)}
            onDragEnd={drop} 
            
            
            >
              <div className="text">{desc.description}</div>
              <span className="edit">
                <AiOutlineEdit />
              </span>
            </div>
          ))}
        </div>

        {addTicketMode && (
          <div className="down">
            <button
              className="adBtn"
              onClick={(e) => {
                addTicket(e);
              }}>
              Add a card
            </button>
            <button
              className="cancel"
              onClick={() => setAddTicketMode((prev) => !prev)}>
              X
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default BackLog;
