import { Link, Routes, Route } from "react-router-dom";
import { QuizArena, Home, ScoreBoard } from "./Pages";

function App() {
  return (
    <div className="App">
      <nav>
        <Link to="/home">Home</Link>
        <Link to="/">QuizArena</Link>
        <Link to="/score">ScoreBoard</Link>
      </nav>
      <Routes>
        <Route path="/" element={<QuizArena />} />
        <Route path="/home" element={<Home />} />
        <Route path="/score" element={<ScoreBoard />} />
      </Routes>
    </div>
  );
}

export default App;
