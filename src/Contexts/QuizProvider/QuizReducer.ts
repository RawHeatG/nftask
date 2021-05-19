import { State, Action } from "./QuizProvider.type";
import { Navigate } from "react-router-dom"

// const checkQuizEnd = (state: State, action: Action) => {
//   if(state.quizLength === state.currentQuestionNumber){
//     Navigate()
//   }
// }

export const QuizReducer = (state: State, action: Action) => {
    switch (action.type) {
      case "SKIP":
        return { ...state, questionNumber: state.currentQuestionNumber + 1 };
      case "EVALUATE":
        return action.payload.isRight
          ? {
              ...state,
              score: state.score + 1,
              questionNumber: state.currentQuestionNumber + 1,
            }
          : {
              ...state,
              score: state.score - 1,
              questionNumber: state.currentQuestionNumber + 1,
            };
      default:
        return state;
    }
  };