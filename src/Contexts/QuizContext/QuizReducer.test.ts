import { quizReducer } from "./QuizReducer";
import { InitialState } from "./QuizContext.types";

describe("Test Quiz Reducer", () => {
    test("Should Reset Quiz", () => {
        const initialState: InitialState = {
            quizData: {
                name: "Advance",
                id: 125,
                questions: [
                    {
                        question: "What is one of the main reasons why artists like using NFTs?",
                        imgUrl: "https://images.squarespace-cdn.com/content/v1/5af1298bfcf7fd60f31f66bd/1617804533283-U1BARQ2051TP24W9IIU1/NFT+ARTICLE+COVER.png",
                        selected: null,
                        options: [
                            {
                                option: "NFTs provide artists more chances to sell works worldwide.",
                                id: 1,
                                isRight: false
                            }
                        ]
                    }
                ]
            },
            currentQuestionNumber: 1,
            score: 10,
            isOptionSelected: true
        }

        const reducedState = quizReducer(initialState, { type: "RESET" })

        expect(reducedState).toEqual({
            quizData: null,
            currentQuestionNumber: 0,
            score: 0,
            isOptionSelected: false
        })
    });

    test("Should Load Quiz", () => {
        const initialState: InitialState = {
            quizData: null,
            currentQuestionNumber: 0,
            score: 0,
            isOptionSelected: false
        }

        const reducedState = quizReducer(initialState, {
            type: "LOAD_QUIZ",
            payload: {
                name: "Advance",
                id: 125,
                questions: [
                    {
                        question: "What is one of the main reasons why artists like using NFTs?",
                        imgUrl: "https://images.squarespace-cdn.com/content/v1/5af1298bfcf7fd60f31f66bd/1617804533283-U1BARQ2051TP24W9IIU1/NFT+ARTICLE+COVER.png",
                        selected: null,
                        options: [
                            {
                                option: "NFTs provide artists more chances to sell works worldwide.",
                                id: 1,
                                isRight: false
                            }
                        ]
                    }
                ]
            }
        })

        expect(reducedState).toEqual({
            quizData: {
                name: "Advance",
                id: 125,
                questions: [
                    {
                        question: "What is one of the main reasons why artists like using NFTs?",
                        imgUrl: "https://images.squarespace-cdn.com/content/v1/5af1298bfcf7fd60f31f66bd/1617804533283-U1BARQ2051TP24W9IIU1/NFT+ARTICLE+COVER.png",
                        selected: null,
                        options: [
                            {
                                option: "NFTs provide artists more chances to sell works worldwide.",
                                id: 1,
                                isRight: false
                            }
                        ]
                    }
                ]
            },
            currentQuestionNumber: 0,
            score: 0,
            isOptionSelected: false
        })
    });

    test("Should Evaluate Option", () => {
        const initialState: InitialState = {
            quizData: {
                name: "Advance",
                id: 125,
                questions: [
                    {
                        question: "What is one of the main reasons why artists like using NFTs?",
                        imgUrl: "https://images.squarespace-cdn.com/content/v1/5af1298bfcf7fd60f31f66bd/1617804533283-U1BARQ2051TP24W9IIU1/NFT+ARTICLE+COVER.png",
                        selected: null,
                        options: [
                            {
                                option: "NFTs provide artists more chances to sell works worldwide.",
                                id: 1,
                                isRight: false
                            }
                        ]
                    }
                ]
            },
            currentQuestionNumber: 2,
            score: 20,
            isOptionSelected: false
        }

        const reducedState = quizReducer(initialState, {
            type: "EVALUATE",
            payload: {
                option: "NFTs provide artists more chances to sell works worldwide.",
                id: 1,
                isRight: false
            }
        })

        expect(reducedState).toEqual({
            quizData: {
                name: "Advance",
                id: 125,
                questions: [
                    {
                        question: "What is one of the main reasons why artists like using NFTs?",
                        imgUrl: "https://images.squarespace-cdn.com/content/v1/5af1298bfcf7fd60f31f66bd/1617804533283-U1BARQ2051TP24W9IIU1/NFT+ARTICLE+COVER.png",
                        selected: null,
                        options: [
                            {
                                option: "NFTs provide artists more chances to sell works worldwide.",
                                id: 1,
                                isRight: false
                            }
                        ]
                    }
                ]
            },
            currentQuestionNumber: 2,
            score: 15,
            isOptionSelected: true
        })
    })

    test("Should move to the next question", () => {
        const initialState: InitialState = {
            quizData: {
                name: "Advance",
                id: 125,
                questions: [
                    {
                        question: "What is one of the main reasons why artists like using NFTs?",
                        imgUrl: "https://images.squarespace-cdn.com/content/v1/5af1298bfcf7fd60f31f66bd/1617804533283-U1BARQ2051TP24W9IIU1/NFT+ARTICLE+COVER.png",
                        selected: null,
                        options: [
                            {
                                option: "NFTs provide artists more chances to sell works worldwide.",
                                id: 1,
                                isRight: false
                            }
                        ]
                    }
                ]
            },
            currentQuestionNumber: 2,
            score: 20,
            isOptionSelected: true
        }

        const reducedState = quizReducer(initialState, {
            type: "NEXT_QUESTION"
        })

        expect(reducedState).toEqual({
            quizData: {
                name: "Advance",
                id: 125,
                questions: [
                    {
                        question: "What is one of the main reasons why artists like using NFTs?",
                        imgUrl: "https://images.squarespace-cdn.com/content/v1/5af1298bfcf7fd60f31f66bd/1617804533283-U1BARQ2051TP24W9IIU1/NFT+ARTICLE+COVER.png",
                        selected: null,
                        options: [
                            {
                                option: "NFTs provide artists more chances to sell works worldwide.",
                                id: 1,
                                isRight: false
                            }
                        ]
                    }
                ]
            },
            currentQuestionNumber: 3,
            score: 20,
            isOptionSelected: false
        })
    })

    test("Should save the selected option", () => {
        const initialState: InitialState = {
            quizData: {
                name: "Advance",
                id: 125,
                questions: [
                    {
                        question: "What is one of the main reasons why artists like using NFTs?",
                        imgUrl: "https://images.squarespace-cdn.com/content/v1/5af1298bfcf7fd60f31f66bd/1617804533283-U1BARQ2051TP24W9IIU1/NFT+ARTICLE+COVER.png",
                        selected: null,
                        options: [
                            {
                                option: "NFTs provide artists more chances to sell works worldwide.",
                                id: 1,
                                isRight: false
                            }
                        ]
                    }
                ]
            },
            currentQuestionNumber: 2,
            score: 20,
            isOptionSelected: true
        }

        const reducedState = quizReducer(initialState, {
            type: "SAVE_SELECTED_OPTION",
            payload: {
                name: "Advance",
                id: 125,
                questions: [
                    {
                        question: "What is one of the main reasons why artists like using NFTs?",
                        imgUrl: "https://images.squarespace-cdn.com/content/v1/5af1298bfcf7fd60f31f66bd/1617804533283-U1BARQ2051TP24W9IIU1/NFT+ARTICLE+COVER.png",
                        selected: 1,
                        options: [
                            {
                                option: "NFTs provide artists more chances to sell works worldwide.",
                                id: 1,
                                isRight: false
                            }
                        ]
                    }
                ]
            }
        })

        expect(reducedState).toEqual({
            quizData: {
                name: "Advance",
                id: 125,
                questions: [
                    {
                        question: "What is one of the main reasons why artists like using NFTs?",
                        imgUrl: "https://images.squarespace-cdn.com/content/v1/5af1298bfcf7fd60f31f66bd/1617804533283-U1BARQ2051TP24W9IIU1/NFT+ARTICLE+COVER.png",
                        selected: 1,
                        options: [
                            {
                                option: "NFTs provide artists more chances to sell works worldwide.",
                                id: 1,
                                isRight: false
                            }
                        ]
                    }
                ]
            },
            currentQuestionNumber: 2,
            score: 20,
            isOptionSelected: true
        })
    })
})