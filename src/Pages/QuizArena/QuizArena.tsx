import { useQuiz, Action } from "../../Contexts";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Quiz } from "../../data.type";
import { quizDb } from "../../data";
import "./QuizArena.css";

export function QuizArena() {
  const [optionStyle, setOptionStyle] = useState({});
  const [isButtonEnabled, setIsButtobEnabled] = useState<boolean>(false);
  const navigate = useNavigate();

  const {
    state: { currentQuestionNumber, score, quizData },
    dispatch,
  } = useQuiz();

  // const localQuiz = { ...(quizData as Quiz) };
  // // console.log(localQuiz === quizData);
  // // console.log({ quizData });
  // console.log({ localQuiz });

  if (quizData === null) {
    return (
      <div>
        <h1>Loading..</h1>
      </div>
    );
  } else {
    const func = () => {
      if (currentQuestionNumber + 1 === quizData.questions.length) {
        navigate("/score");
      } else {
        dispatch({ type: "NEXT_QUESTION" });
      }
      setIsButtobEnabled(false);
    };
    const evaluateOption = (action: Action) => {
      if (action.type === "EVALUATE") {
        console.log("Id recieved: ", action.payload);
        console.log({ quizDb });
        quizData.questions[currentQuestionNumber].selected = action.payload.id;
        action.payload.isRight
          ? setOptionStyle({ backgroundColor: "#A3E635", color: "white" })
          : setOptionStyle({ backgroundColor: "#EF4444", color: "white" });
        dispatch({ type: "SAVE_SELECTED_OPTION", payload: quizData });

        dispatch({ type: "EVALUATE", payload: action.payload });
      }
      setIsButtobEnabled(true);
      setTimeout(func, 1000);
    };

    return (
      <div className="main-height text-main flex flex-col items-center">
        <h1>{quizData.name}</h1>
        <p>{score} : Score</p>
        <h2>
          Question {currentQuestionNumber + 1}/{quizData.questions.length}
        </h2>
        <div className="question-container">
          <h2 className="border-b-2 pb-2 mb-2">
            Q: {quizData.questions[currentQuestionNumber].question}
          </h2>
          <div className="option-container">
            {console.log(quizData.questions[currentQuestionNumber])}
            {quizData.questions[currentQuestionNumber].options.map((opt) => (
              <button
                disabled={isButtonEnabled}
                className="option-style"
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
