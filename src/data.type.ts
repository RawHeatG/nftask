export type Option = {
    option: string;
    isRight: boolean;
}

export type Question = {
    question: string;
    options: Option[];
}

export type Quiz = {
    name: string;
    id: number;
    questions: Question[];
}

export type QuizDb = {
    quizes: Quiz[];
}