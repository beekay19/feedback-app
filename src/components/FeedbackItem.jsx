import {FaTimes,FaEdit} from 'react-icons/fa'
import { useContext } from 'react'
import feedbackContext from '../context/FeedbackContext'
import Card from "./Shared/Card"

function FeedbackItem({item}) {
    const {deteleFeedback,editFeedback} = useContext(feedbackContext)
  return (
    
    <Card >
        <div className="num-display">{item.rating}</div>
        <button onClick={() => deteleFeedback (item.id)} className='close'> <FaTimes color='purple'/>
         </button>
         <button onClick={()=> editFeedback(item)} className='edit'>
          <FaEdit color='purple'/>
         </button>
        <div className="text-display">{item.text}</div>
    </Card>
    
  )
}


export default FeedbackItem
  