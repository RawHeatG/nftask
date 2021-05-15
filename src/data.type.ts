export type Options = {
    option: string;
    isRight: boolean;
}

export type Questions = {
    question: string;
    options: Options[];
}

export type QuizData = {
    name: string;
    id: number;
    questions: Questions[];
}