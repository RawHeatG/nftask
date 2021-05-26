import { createContext, useContext, useReducer, Dispatch, FC } from "react";
import { Action, InitialState } from "./QuizProvider.type";
import { quizReducer } from "./QuizReducer";

export const initialState: InitialState = {
  quizData: null,
  currentQuestionNumber: 0,
  score: 0,
};

const QuizContext = createContext<{
  state: InitialState;
  dispatch: Dispatch<Action>;
}>({ state: initialState, dispatch: (action: Action) => null });

export const QuizProvider: FC = ({ children }) => {
  const [state, dispatch] = useReducer(quizReducer, initialState);

  return (
    <QuizContext.Provider value={{ state, dispatch }}>
      {children}
    </QuizContext.Provider>
  );
};
export const useQuiz = () => {
  return useContext(QuizContext);
};
