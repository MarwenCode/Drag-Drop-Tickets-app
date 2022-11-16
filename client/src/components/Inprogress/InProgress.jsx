import React, { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { AiOutlineEdit } from "react-icons/ai";
// import "./backlog.scss";

const getTicketLocalProg = () => {
  let descriptionProg = localStorage.getItem("descriptionProg");
  if (descriptionProg) {
    return JSON.parse(localStorage.getItem("descriptionProg"));
  } else {
    return [];
  }
};

const InProgress = () => {
  const [descriptionProg, setDescriptionProg] = useState("");
  const [inputFieldProg, setInputFieldProg] = useState(getTicketLocalProg());
  const [addTicketMode, setAddTicketMode] = useState(false);

  // const location = useLocation();
  // console.log(location);
  // // const path = location.pathname.split("/")[2];
  // // console.log(path);

  const addProgTicket = (e) => {
    e.preventDefault();
    const newTicketProg = {
      idProg: new Date().getTime().toString(),
      descriptionProg: descriptionProg,
    };

    setInputFieldProg([...inputFieldProg, newTicketProg]);
    setDescriptionProg("");
    setAddTicketMode(false);
  };
  console.log(inputFieldProg);

  useEffect(() => {
    localStorage.setItem("descriptionProg", JSON.stringify(inputFieldProg));
  }, [inputFieldProg]);

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
    const copyListItems = [...inputFieldProg];
    const dragItemContent = copyListItems[dragItem.current];
    copyListItems.splice(dragItem.current, 1);
    copyListItems.splice(dragOverItem.current, 0, dragItemContent);
    dragItem.current = null;
    dragOverItem.current = null;
    setInputFieldProg(copyListItems);
  };

  return (
    <div className="backlog">
      <div className="section">
        <h1 className="title">In-progress</h1>
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
              value={descriptionProg}
              onChange={(e) => setDescriptionProg(e.target.value)}
            />
          </form>
        )}

        <div className="center">
          {inputFieldProg.map((desc, index) => (
            <div
              className="description"
              key={index}
              onDragStart={(e) => dragStart(e, index)}
              onDragEnter={(e) => dragEnter(e, index)}
              onDragEnd={drop}>
              <div className="text"> {desc.descriptionProg}</div>
              <span className="edit">
                <AiOutlineEdit />{" "}
              </span>
            </div>
          ))}
        </div>

        {addTicketMode && (
          <div className="down">
            <button
              className="adBtn"
              onClick={(e) => {
                addProgTicket(e);
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

export default InProgress;
