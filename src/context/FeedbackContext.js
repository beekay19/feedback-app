import { createContext, useState } from "react";
import {v4 as uuidv4 } from 'uuid'

const feedbackContext = createContext();

export const FeedbackProvider = ({ children }) => {
  const [feedback, setFeedback] = useState([
    { id: 1, text: "This item is from context", rating: 10 },
    { id: 2, text: "This item is from context", rating: 9 },
    { id: 3, text: "This item is from context", rating: 8 },
  ]); 

  const [feedbackEdit,setFeedbackEdit] = useState({
    item:{},
    edit: false
  }) 

//   set feedbact delete
  const deteleFeedback = (id)=>{
    if(window.confirm("Are you sure you want to delete")){
        setFeedback(feedback.filter((item) => item.id !== id))
    }
}

// set feedbact added 
const addFeedback = (newFeedback) =>{
    newFeedback.id = uuidv4()
  setFeedback([newFeedback,...feedback])
  }
//   set item to updated
  const editFeedback = (item) =>{
    setFeedbackEdit({
        item,
        edit: true 
    })
  }
//   update feedback item
const updateFeedback = (id,updItem) => {
    setFeedback(feedback.map((item) => item.id ===id ?{...item,...updItem }: item))
}

  return <feedbackContext.Provider 
  value={{
    feedback,
    feedbackEdit,
    deteleFeedback,
    addFeedback,
    editFeedback,
    updateFeedback
}}>{children}</feedbackContext.Provider>;
};

export default feedbackContext