// import React, { useState, useEffect } from "react";
// import { Link, useLocation } from "react-router-dom";
// import BackLog from '../backlog/BackLog'
// import Modal from '../modal/Modal';
// import "./singleticket.scss";


// const getTicketLocal = () => {
//   let description =localStorage.getItem("description")
//  if(description) {
//    return JSON.parse(localStorage.getItem("description"))
//  } else {
//   return []
//  }
// }


// const SingleTicket = () => {
//   const [description, setDescription] = useState(getTicketLocal());


//   console.log(description)

//   const location = useLocation();
//   console.log(location);
//     const path = location.pathname.split("/")[2];
//   console.log(path);


//   // const getSingleTicket = () => {
//   //   const newSingleTicket = {
//   //     id: path,
//   //     description:description
//   //   }
//   // }





//   return (
//     <div className='singleTicket'>


   
       
        
//         <Modal />


      

//     </div>
//   )
// }

// export default SingleTicket