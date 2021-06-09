import { quizDb } from "../../data";
import { useQuiz } from "../../Contexts";
import { useNavigate } from "react-router-dom";

export function Home() {
  const navigate = useNavigate();
  const { dispatch } = useQuiz();
  return (
    <>
      <div className="main-height my-auto flex flex-col items-center justify-center  dark:text-white dark:bg-gray-800">
        <h1 className="text-center text-8xl text-transparent bg-clip-text bg-gradient-to-r from-green-300 to-green-400 font-sans font-bold">
          NFT
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">
            ask
          </span>
        </h1>
        <h3>Select the quiz</h3>
        <div className="flex flex-col">
          {quizDb.quizes.map((quiz) => (
            <button
              className="border-2 p-2 m-2 rounded-xl border-gray-400 text-xl text-gray-500 hover:bg-gradient-to-r from-green-400 to-blue-500"
              onClick={() => dispatch({ type: "LOAD_QUIZ", payload: quiz })}
            >
              {quiz.name}
            </button>
          ))}
        </div>
        <button onClick={() => navigate("/score")}>Score</button>
      </div>
    </>
  );
}
