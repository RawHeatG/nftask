import { InitialState, Action } from "./QuizProvider.type";
import { initialState } from "./QuizProvider";
 
export const quizReducer = (state: InitialState, action: Action): InitialState => {
                                                 
    switch (action.type) {
      case "LOAD_QUIZ":
        return { ...initialState, quizData: action.payload };
      case "NEXT_QUESTION":
        return { ...state, currentQuestionNumber: state.currentQuestionNumber + 1 }
      case "EVALUATE":
        return (action.payload.isRight
          ? {
              ...state,
              score: state.score + 1
            }
          : {
              ...state,
              score: state.score - 1
            }
        )
      default:
        return state;
    }
  };