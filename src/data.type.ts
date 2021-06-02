export type Option = {
    option: string;
    isRight: boolean;
    id: number;
}

export type Question = {
    question: string;
    options: Option[];
    selected: number | null;
}

export type Quiz = {
    name: string;
    id: number;
    questions: Question[];
}

export type QuizDb = {
    quizes: Quiz[];
}