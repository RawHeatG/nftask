import { Option } from "../../data.type";

export type State = {
    questionNumber: number;
    quizId: number | null;
    score: number;
};

export type Action =
| { type: "SKIP"; payload: Option }
| { type: "EVALUATE"; payload: Option };

export type Dispatch = {
    action: Action;
    state: State;
  }