import { useQuiz } from "../../Contexts/QuizProvider/QuizProvider";

export function ScoreBoard() {
  const {
    state: { score, quizData },
  } = useQuiz();
  let optionStyle = {};
  return (
    <>
      <h1>Welcome to ScoreBoard</h1>
      <p>Your Score: {score}</p>
      {quizData?.questions.map((ques) => (
        <div>
          <h3>Q: {ques.question}</h3>
          {ques.options.map((opt) => {
            optionStyle = {};
            if (ques.selected === opt.id && !opt.isRight) {
              optionStyle = { backgroundColor: "red", color: "white" };
            }
            if (opt.isRight) {
              optionStyle = { backgroundColor: "green", color: "white" };
            }
            return <button style={{ ...optionStyle }}>{opt.option}</button>;
          })}
        </div>
      ))}
    </>
  );
}
