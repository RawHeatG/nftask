import { quizData } from "../../data";
import { useState } from "react";
import "./QuizArena.css";
import { Option } from "../../data.type";
import { useQuiz } from "../../Contexts";

export function QuizArena() {
  // const [score, setScore] = useState(0);
  // const CalculateScore = (opt: Option) => {
  //   opt.isRight
  //     ? setScore((score) => score + 1)
  //     : setScore((score) => score - 1);
  // };

  const { state } = useQuiz();

  const { questionNumber, quizId, score } = state;
  console.log(questionNumber);
  return (
    <div className="quiz-arena">
      <h1>{quizData.name}</h1>
      <p style={{ textAlign: "right", width: "100%" }}>{score} : Score</p>
      <ol>
        {quizData.questions.map((ques) => (
          <li>
            <h2>{ques.question}</h2>
            {ques.options.map((opt) => (
              <button>{"Yolo"}</button>
            ))}
          </li>
        ))}
      </ol>
    </div>
  );
}
