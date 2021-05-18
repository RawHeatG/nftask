import { Dispatch } from "./QuizProvider.type";

export const QuizReducer = ({
    action,
    state,
  }: Dispatch): any => {
    console.log("action: ", action)
    switch (action.type) {
      case "SKIP":
        return { ...state, questionNumber: state.questionNumber + 1 };
      case "EVALUATE":
        return action.payload.isRight
          ? {
              ...state,
              score: state.score + 1,
              questionNumber: state.questionNumber + 1,
            }
          : {
              ...state,
              score: state.score - 1,
              questionNumber: state.questionNumber + 1,
            };
      default:
        return state;
    }
  };