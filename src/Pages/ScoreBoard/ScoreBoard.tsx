import { useQuiz } from "../../Contexts";

export function ScoreBoard() {
  const {
    state: { score, quizData },
  } = useQuiz();
  let optionStyle = {};
  return (
    <div className="p-4 flex flex-col items-center dark:text-gray-100 dark:bg-gray-800">
      <h1 className="text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">
        ScoreBoard
      </h1>

      {!quizData ? (
        <h1>Loading...</h1>
      ) : (
        <div>
          <p className="mt-16 text-2xl">Your Score: {score}</p>
          {quizData.questions.map((ques) => (
            <div className="question-container m-2 w-full">
              <h3 className="border-b-2 pb-2 mb-2">Q: {ques.question}</h3>
              <div className="option-container">
                {ques.options.map((opt) => {
                  optionStyle = {};
                  if (ques.selected === opt.id && !opt.isRight) {
                    optionStyle = { backgroundColor: "red", color: "white" };
                  }
                  if (opt.isRight) {
                    optionStyle = { backgroundColor: "green", color: "white" };
                  }
                  return (
                    <div className="option-style" style={{ ...optionStyle }}>
                      {opt.option}
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
