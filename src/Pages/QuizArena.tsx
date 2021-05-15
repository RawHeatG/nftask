import { quizData } from "../data";

export function QuizArena() {
  return (
    <>
      <h1>{quizData.name}</h1>
      <ul>
        {quizData.questions.map((ques) => (
          <li>
            {ques.question}
            {ques.options.map((opt) => opt.option)}
          </li>
        ))}
      </ul>
    </>
  );
}
