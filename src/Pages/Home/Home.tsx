import { quizDb } from "../../data";
import { useQuiz } from "../../Contexts";
import { useNavigate } from "react-router-dom";

export function Home() {
  const navigate = useNavigate();
  const { dispatch } = useQuiz();
  return (
    <>
      <h1>Welcome to Home</h1>
      <h2>Select the quiz</h2>
      {quizDb.quizes.map((quiz) => (
        <button onClick={() => dispatch({ type: "LOAD_QUIZ", payload: quiz })}>
          {quiz.name}
        </button>
      ))}
      <button onClick={() => navigate("/score")}>Score</button>
    </>
  );
}
