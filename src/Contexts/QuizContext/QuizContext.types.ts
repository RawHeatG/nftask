import { Option, Quiz } from "../../data.type";

export type InitialState = {
    quizData: Quiz | null;
    currentQuestionNumber: number;
    score: number;
    isOptionSelected: boolean;
};

export type Action =
    | { type: "LOAD_QUIZ"; payload: Quiz }
    | { type: "EVALUATE"; payload: Option }
    | { type: "NEXT_QUESTION" }
    | { type: "SAVE_SELECTED_OPTION"; payload: Quiz }
    | { type: "RESET" }
