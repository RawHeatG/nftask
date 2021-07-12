import { InitialState, Action } from "./QuizContext.types";
import { initialState } from "./QuizContext";

export const quizReducer = (state: InitialState, action: Action): InitialState => {

  switch (action.type) {
    case "LOAD_QUIZ":
      return { ...state, quizData: { ...action.payload } };
    case "NEXT_QUESTION":
      return { ...state, currentQuestionNumber: state.currentQuestionNumber + 1, isOptionSelected: false }
    case "EVALUATE":
      return (
        action.payload.isRight
          ? {
            ...state,
            score: state.score + 10,
            isOptionSelected: true
          }
          : {
            ...state,
            score: state.score - 5,
            isOptionSelected: true
          }
      )
    case "SAVE_SELECTED_OPTION":
      return { ...state, quizData: action.payload }

    case "RESET":
      return initialState
    default:
      return state;
  }
};