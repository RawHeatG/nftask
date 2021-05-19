import { Option, QuizData } from "../../data.type";

export type State = {
    quizName: string | null;
    quizLength: number;
    currentQuestionNumber: number;
    
    score: number;
};

export type Action =
| { type: "LOAD_QUIZ"; payload: QuizData}
| { type: "SKIP" }
| { type: "EVALUATE"; payload: Option };

export type Dispatch = {
    action: Action;
    state: State;
  }