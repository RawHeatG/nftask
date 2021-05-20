import { State, Action } from "./QuizProvider.type";
import { useNavigate } from "react-router-dom";


export const QuizReducer = (state: State, action: Action) => {
  console.log("Line 6")
  const navigate = useNavigate();
  console.log("Line 8")
  const checkQuizEnd = (state: State, action: Action ) => {
    
    console.log("currentQuestionNumber: ", state.currentQuestionNumber)
    if(state.currentQuestionNumber + 1 === state.quizData?.questions.length ){
      navigate("/score")
    }   
  }

  let newState;
                                                 
    switch (action.type) {
      case "LOAD_QUIZ":
        console.log("quiz",action.payload)
        newState = {...state, quizData: action.payload, score: 0, currentQuestionNumber: 0 }
        break;
      case "SKIP":
        newState = { ...state, currentQuestionNumber: state.currentQuestionNumber + 1 }
        checkQuizEnd(state, action);
        break;
      case "EVALUATE":
        (newState = action.payload.isRight
          ? {
              ...state,
              score: state.score + 1,
              currentQuestionNumber: state.currentQuestionNumber + 1,
            }
          : {
              ...state,
              score: state.score - 1,
              currentQuestionNumber: state.currentQuestionNumber + 1,
            }
        )
        checkQuizEnd(state, action);
        break;
      default:
        newState = state;
    }
    return newState;
  };