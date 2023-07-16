import { useState } from "react";
import Header from "./components/header";
// import FeedbackItem from "./components/FeedbackItem";
import FeedbackList from "./components/FeedbackList";
import FeedbackStats from "./components/FeedbackStats";
import FeedbackData from "./Data/FeedbackData";

function App() {
const [feedback, setFeedback] = useState(FeedbackData)
const deteleFeedback = (id)=>{
    if(window.confirm("Are you sure you want to")){
        setFeedback(feedback.filter((item) => item.id !== id))
    }
}
  return (
    <>
      <Header />
      <div className="container">
        <FeedbackStats feedback={feedback}/>
       <FeedbackList feedback={feedback} handleDelete = {deteleFeedback}/>
      </div>
    </>
  );
}

export default App;
