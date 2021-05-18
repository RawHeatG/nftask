export type Option = {
    option: string;
    isRight: boolean;
}

export type Question = {
    question: string;
    options: Option[];
}

export type QuizData = {
    name: string;
    id: number;
    questions: Question[];
}