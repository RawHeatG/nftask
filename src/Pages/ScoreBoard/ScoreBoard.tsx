import { useQuiz } from "../../Contexts/QuizProvider/QuizProvider";

export function ScoreBoard() {
  const {
    state: { score },
  } = useQuiz();
  return (
    <>
      <h1>Welcome to ScoreBoard</h1>
      <p>Your Score: {score}</p>
    </>
  );
}
