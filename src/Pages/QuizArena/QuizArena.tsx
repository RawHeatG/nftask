import { useQuiz } from "../../Contexts";
import "./QuizArena.css";

export function QuizArena() {
  const { state, dispatch } = useQuiz();
  const { currentQuestionNumber, score, quizData } = state;
  return !quizData ? (
    <h1>"Loading..."</h1>
  ) : (
    <div className="quiz-arena">
      <h1>{quizData.name}</h1>
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
