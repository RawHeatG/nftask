export type Option = {
    option: string;
    isRight: boolean;
    id: number;
}

export type Question = {
    question: string;
    imgUrl: string;
    options: Option[];
    selected: number | null;
}

export type Quiz = {
    name: string;
    id: number;
    questions: Question[];
    quizImg: string;
}

export type QuizDb = {
    quizes: Quiz[];
}