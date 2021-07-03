import { Routes, Route } from "react-router-dom";
import { Navbar } from "./Components";
import { QuizArena, Home, ScoreBoard } from "./Pages";
import { useTheme } from "./Contexts";

function App() {
  const { theme } = useTheme();
  return (
    <div className={theme}>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/quiz" element={<QuizArena />} />
        <Route path="/score" element={<ScoreBoard />} />
      </Routes>
    </div>
  );
}

export default App;
