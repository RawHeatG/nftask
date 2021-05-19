import { quizData } from "../../data";
import { useQuiz } from "../../Contexts";
import "./QuizArena.css";

export function QuizArena() {
  const { state, dispatch } = useQuiz();
  //dispatch({ type: "SKIP", payload: { option: "yolo", isRight: true } });
  const { currentQuestionNumber, score } = state;

  return (
    <div className="quiz-arena">
      <p style={{ textAlign: "right", width: "100%" }}>{score} : Score</p>
      <h2>{quizData.questions[currentQuestionNumber].question}</h2>
      <ul>
        {quizData.questions[currentQuestionNumber].options.map((opt) => (
          <button onClick={() => dispatch({ type: "EVALUATE", payload: opt })}>
            {opt.option}
          </button>
        ))}
      </ul>
      <button onClick={() => dispatch({ type: "SKIP" })}>Skip</button>
    </div>
  );
}
