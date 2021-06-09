import { useQuiz, Action } from "../../Contexts";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./QuizArena.css";

export function QuizArena() {
  const [optionStyle, setOptionStyle] = useState({});
  const navigate = useNavigate();

  const {
    state: { currentQuestionNumber, score, quizData },
    dispatch,
  } = useQuiz();

  if (quizData === null) {
    return (
      <div>
        <h1>Loading..</h1>
      </div>
    );
  } else {
    const evaluateOption = (action: Action) => {
      if (action.type === "EVALUATE") {
        quizData.questions[currentQuestionNumber].selected = action.payload.id;
        dispatch({ type: "SAVE_SELECTED_OPTION", payload: quizData });
        action.payload.isRight
          ? setOptionStyle({ backgroundColor: "green", color: "white" })
          : setOptionStyle({ backgroundColor: "red", color: "white" });
        dispatch({ type: "EVALUATE", payload: action.payload });
      }
      currentQuestionNumber + 1 === quizData?.questions.length
        ? navigate("/score")
        : dispatch({ type: "NEXT_QUESTION" });
    };

    return (
      <div className="main-height text-2xl text-main flex flex-col items-center dark:text-white dark:bg-gray-800">
        <h1>{quizData.name}</h1>
        <p>{score} : Score</p>
        <h2>
          Question {currentQuestionNumber + 1}/{quizData.questions.length}
        </h2>
        <div className="relative w-full border-4 p-6 rounded-3xl">
          <h2 className="border-b-2 pb-2 mb-2">
            Q: {quizData.questions[currentQuestionNumber].question}
          </h2>
          <div className="w-full flex flex-col items-center">
            {quizData.questions[currentQuestionNumber].options.map((opt) => (
              <button
                className="w-full border-2 rounded-xl p-1 m-1 "
                style={
                  quizData.questions[currentQuestionNumber].selected === opt.id
                    ? { ...optionStyle }
                    : {}
                }
                onClick={() =>
                  evaluateOption({ type: "EVALUATE", payload: opt })
                }
              >
                {opt.option}
              </button>
            ))}
          </div>
          <div className="text-center w-full border-2 rounded-xl p-1 m-1">
            <button onClick={() => evaluateOption({ type: "NEXT_QUESTION" })}>
              Skip
            </button>
          </div>
        </div>
      </div>
    );
  }
}
