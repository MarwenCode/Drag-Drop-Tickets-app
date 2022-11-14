import React, { useState, useEffect } from "react";
import { AiOutlineEdit } from "react-icons/ai"
import "./backlog.scss";




const getTicketLocal = () => {
  let description =localStorage.getItem("description")
 if(description) {
   return JSON.parse(localStorage.getItem("description"))
 } else {
  return []
 }
}

const BackLog = () => {
  const [description, setDescription] = useState("");
  const [inputField, setInputField] = useState(getTicketLocal());
  const [addTicketMode, setAddTicketMode] = useState(false);



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
    localStorage.setItem("description", JSON.stringify(inputField))
  }, [inputField])

  return (
    <div className="backlog">
      <div className="section">
        <h1 className="title">Backlog</h1>
        <div className="color"></div>
        {!addTicketMode && 
         <button className="addCardBtn"  onClick={() => setAddTicketMode((prev) => !prev)}> +  add a card</button> }
       
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
            <div className="description" key={index}>
              <p className="text"> {desc.description}</p>
              <span className="edit"><AiOutlineEdit />  </span>
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
             <button className="cancel">X</button>
           </div>


        )



        }
     
      </div>
    </div>
  );
};

export default BackLog;
