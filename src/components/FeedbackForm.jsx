import { useState,useContext,useEffect } from "react"
import feedbackContext from "../context/FeedbackContext"
import RatingSelect from "./RatingSelect"
import Card from "./Shared/Card"
import Button from "./Shared/button"
function FeedbackForm() {
  const [text,setText] = useState('')
  const [rating,setRating] = useState(10)
  const [btnDisabled,setBtnDisabled] = useState(true)
  const [message,setMessage] = useState('')
  const {addFeedback,feedbackEdit,updateFeedback} = useContext(feedbackContext)
  useEffect(()=> {
    if(feedbackEdit.edit === true){
      setBtnDisabled(false)
      setText(feedbackEdit.item.text)
      setRating(feedbackEdit.item.rating)
    }
  },[feedbackEdit] )
  const handleTextChange = (e) =>{
    if(text === ''){
      setBtnDisabled(true)
      setMessage(null)
    }else if(text !== '' && text.trim().length <= 10){
      setBtnDisabled(true)
      setMessage('Text must be at least 10 characters')
    }else{
      setBtnDisabled(false)
      setMessage(null)
    }
    setText(e.target.value)
    // console.log(text)
  } 

  const handleSubmit = (e) => {
    e.preventDefault()
    if(text.trim().length > 10){
      const newFeedback = {
        text,
        rating
    }  
    if(feedbackEdit.edit === true){
      updateFeedback(feedbackEdit.item.id,newFeedback)
    }else{
      addFeedback(newFeedback)
    }
    setText('')
    }
  }
  return (
    <Card>
      <form onSubmit={handleSubmit} > 
        <h2>How would you rate your service with us?</h2>
        <RatingSelect select={(rating)=> setRating(rating) }/>
        <div className="input-group">
          <input onChange={handleTextChange} type="text" value={text} placeholder="White a review" />
          <Button type='submit' isDisabled={btnDisabled}> Send</Button>

        </div>
        {message &&  <div className="message">{message}</div>}
      </form>
    </Card>
  )
}

export default FeedbackForm