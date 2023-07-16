import PropTypes from 'prop-types'

function FeedbackStats({feedback}) {
    // calculate rating average
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

FeedbackStats.prototype ={
    feedback:PropTypes.array.isRequired
}

export default FeedbackStats