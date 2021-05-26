import { Option, Quiz } from "../../data.type";

export type InitialState = {
    quizData: Quiz | null;
    currentQuestionNumber: number;
    score: number;
};

export type Action =
| { type: "LOAD_QUIZ"; payload: Quiz }
| { type: "EVALUATE"; payload: Option }
| { type: "NEXT_QUESTION" }

export type Dispatch = {
    action: Action;
    state: InitialState;
  }