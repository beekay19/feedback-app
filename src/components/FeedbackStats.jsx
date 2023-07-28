import { useContext } from 'react'
import feedbackContext from '../context/FeedbackContext'
function FeedbackStats() {
    // calculate rating average
    const {feedback} = useContext(feedbackContext)
    let average = feedback.reduce( (total,item) => {
        total += item.rating 
        return total 
    },0) / feedback.length
    if(String(average).length > 1){
        average = average.toFixed(1)
    }else{
        average = average.toFixed(0)
    }
  return (
    <div>
      <div className="feedback-stats">
        <h4>{feedback.length} Reviews</h4>
        <h4>Average Rating: {isNaN(average) ? 0:average}</h4>
      </div>
    </div>
  )
}

export default FeedbackStats