import React from "react";
import { useLocation, useNavigate} from "react-router-dom";
import { useSelector } from "react-redux";
import "./HomeMainbar.css";
import QuestionList from "./QuestionList"

const HomeMainbar = () => {

  const location = useLocation()
  const user = 1;
  const navigate= useNavigate();

  const questionsList = useSelector(state => state.questionsReducer)
  
  console.log(questionsList)
  // const questionsList =[{
  //   _id:1,
  //   upVotes: 3,
  //   downVote:2,
  //   noOfAnswers:2,
  //   questionTitle: "What is function?",
  //   questionBody: "It meant to be",
  //   questionTags: ["java", "node js", "react js", "moongoose"],
  //   userPosted: "panda",
  //   askedOn: "jan 1",
  //   answer: [{
  //     answerBody: "Answer",
  //     userAnswerd: 'Reddy ',
  //     answeredOn: 'jan 2',
  //     userId: 2,
  //   }]
  // },{
  //   _id:2,
  //   upVotes: 8,
  //   downVote:0,
  //   noOfAnswers:2,
  //   questionTitle: "What is function?",
  //   questionBody: "It meant to be",
  //   questionTags: ["java", "node js"],
  //   userPosted: "coder",
  //   askedOn: "jan 1",
  //   answer: [{
  //     answerBody: "Answer",
  //     userAnswerd: 'Ram',
  //     answeredOn: 'jun 9',
  //     userId: 2,
  //   }]
  // },{
  //   _id:3,
  //   upVotes: 2,
  //   downVote:1,
  //   noOfAnswers:2,
  //   questionTitle: "What is function?",
  //   questionBody: "It meant to be",
  //   questionTags: ["java", "node js", "react js", "moongoose"],
  //   userPosted: "mano",
  //   askedOn: "dec 26",
  //   answer: [{
  //     answerBody: "Answer",
  //     userAnswerd: 'Reddy ',
  //     answeredOn: 'dec 26',
  //     userId: 2,
  //   }]
  // }]


  const checkAuth = () => {
    if (user === null) {
      alert("login or signup to ask a question");
      navigate("/Auth");
    } else {
      navigate("/AskQuestion");
    }
  };

  return (
    <div className="main-bar">
      <div className="main-bar-header">
        {location.pathname === "/" ? (
          <h1>Top Questions</h1>
        ) : (
          <h1>All Questions</h1>
        )}

        <button onClick={checkAuth} className="ask-btn">
          Ask Question
        </button>
      </div>
      <div>
        {questionsList.data === null ? (
          <h1>Loading...</h1>
        ) : (
          <>
            <p>{questionsList.data.length} questions</p>
            <QuestionList questionsList={questionsList.data} />
          </>
        )}
      </div>
    </div>
  );
};

export default HomeMainbar;
