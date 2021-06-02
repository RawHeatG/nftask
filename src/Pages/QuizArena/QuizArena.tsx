import { useQuiz, Action } from "../../Contexts";
import { useState } from "react";
import { Option, Quiz } from "../../data.type";
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
        dispatch({ type: "EVALUATE", payload: action.payload });
        action.payload.isRight
          ? setOptionStyle({ backgroundColor: "green", color: "white" })
          : setOptionStyle({ backgroundColor: "red", color: "white" });
      }
      currentQuestionNumber + 1 === quizData?.questions.length
        ? navigate("/score")
        : dispatch({ type: "NEXT_QUESTION" });
    };

    return (
      <div className="quiz-arena">
        <h1>{quizData.name}</h1>
        <p style={{ textAlign: "right", width: "100%" }}>{score} : Score</p>
        <h2>{quizData.questions[currentQuestionNumber].question}</h2>
        <ul>
          {quizData.questions[currentQuestionNumber].options.map((opt) => (
            <button
              style={{ ...optionStyle }}
              onClick={() => evaluateOption({ type: "EVALUATE", payload: opt })}
            >
              {opt.option}
            </button>
          ))}
        </ul>
        <button onClick={() => evaluateOption({ type: "NEXT_QUESTION" })}>
          Skip
        </button>
      </div>
    );
  }
}
