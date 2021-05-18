import {
  createContext,
  useContext,
  useReducer,
  Dispatch,
  FC,
  Reducer,
} from "react";
import { State, Action } from "./QuizProvider.type";
import { QuizReducer } from "./QuizReducer";

const initialState: State = {
  questionNumber: 0,
  quizId: null,
  score: 0,
};

const QuizContext = createContext<{
  state: State;
  dispatch: Dispatch<Action>;
}>({ state: initialState, dispatch: (action: Action) => null });

export const QuizProvider: FC = ({ children }) => {
  const [state, dispatch] = useReducer(QuizReducer, initialState);

  return (
    <QuizContext.Provider value={{ state, dispatch }}>
      {children}
    </QuizContext.Provider>
  );
};
export const useQuiz = () => {
  return useContext(QuizContext);
};
