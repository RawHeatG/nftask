import { createContext, useContext, useReducer, Dispatch, FC } from "react";
import { Action, InitialState } from "./QuizContext.type";
import { quizReducer } from "./QuizReducer";

export const initialState: InitialState = {
  quizData: null,
  currentQuestionNumber: 0,
  score: 0,
  isOptionSelected: false,
};

const QuizContext = createContext<{
  state: InitialState;
  dispatch: Dispatch<Action>;
}>({ state: initialState, dispatch: (action: Action) => null });

export const QuizProvider: FC = ({ children }) => {
  const [state, dispatch] = useReducer(quizReducer, initialState);
  console.log("Quiz Provider se:", state);
  return (
    <QuizContext.Provider value={{ state, dispatch }}>
      {children}
    </QuizContext.Provider>
  );
};
export const useQuiz = () => {
  return useContext(QuizContext);
};
