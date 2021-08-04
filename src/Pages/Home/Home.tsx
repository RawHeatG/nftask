import { useQuiz } from "../../Contexts";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { API_URL } from "../../utils";
import { Quiz } from "../../utils/data.type";
import { Loader } from "../../Components";

export function Home() {
  const [quizes, setQuizes] = useState<Quiz[] | null>(null);

  const { dispatch } = useQuiz();

  useEffect(() => {
    dispatch({ type: "RESET" });
    (async function () {
      try {
        console.log("Mchala");
        const response = await axios(`${API_URL}/quiz`);
        setQuizes(response.data.data);
      } catch (err) {
        console.error("Error while fetching Quiz" + err);
      }
    })();
  }, [dispatch]);
  return (
    <>
      <div className="main-height my-auto flex flex-col items-center justify-center">
        <div className="pb-24">
          <h1 className="text-center text-8xl text-transparent bg-clip-text bg-gradient-to-r from-green-300 to-green-400 font-sans font-bold">
            NFT
            <span className="animate-pulse text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">
              ask
            </span>
          </h1>
          <h2 className="text-main text-xl">
            Are you a NFT enthusiast? How about we ask a few question and check
            your love for them ♥.
          </h2>
        </div>
        {quizes === null ? (
          <div>
            <Loader />
          </div>
        ) : (
          <div className="flex flex-col items-center">
            <h3 className="text-main mb-10 text-2xl">Select the quiz</h3>
            <div className="flex flex-wrap items-center justify-center">
              {console.log(quizes)}
              {quizes.map((quiz) => (
                <Link to="/quiz">
                  <div
                    className="w-auto md:w-72 p-4 m-2 flex flex-col justify-center items-center border-2 rounded"
                    onClick={() => {
                      console.log(quiz);
                      dispatch({ type: "LOAD_QUIZ", payload: quiz });
                    }}
                  >
                    <img
                      className="rounded"
                      src={quiz.quizImg}
                      alt={quiz.name}
                    />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </>
  );
}
