import { Option, Quiz } from "../../data.type";

export type State = {
    quizData: Quiz | null;
    currentQuestionNumber: number;
    score: number;
};

export type Action =
| { type: "LOAD_QUIZ"; payload: Quiz}
| { type: "SKIP" }
| { type: "EVALUATE"; payload: Option };

export type Dispatch = {
    action: Action;
    state: State;
  }