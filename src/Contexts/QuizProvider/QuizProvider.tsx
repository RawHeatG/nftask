import { createContext, useContext, useReducer, Dispatch } from "react";
import { Option } from "../../data.type";

type InitialState = {
  questionNumber: number;
  quizId: number | null;
  score: number;
};

const initialState: InitialState = {
  questionNumber: 0,
  quizId: null,
  score: 0,
};

const QuizContext = createContext<{
  state: InitialState;
  dispatch: Dispatch<any>;
}>({ state: initialState, dispatch: () => null });

export const QuizProvider = ({ children }: any) => {
  type Action =
    | { type: "SKIP"; payload: Option }
    | { type: "EVALUATE"; payload: Option };

  const Reducer = ({
    action,
    state,
  }: {
    action: Action;
    state: InitialState;
  }): any => {
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

  const [state, dispatch] = useReducer(Reducer, initialState);

  return (
    <QuizContext.Provider value={{ state, dispatch }}>
      {children}
    </QuizContext.Provider>
  );
};
export const useQuiz = () => {
  return useContext(QuizContext);
};
