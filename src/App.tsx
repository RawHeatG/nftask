import { Link, Routes, Route } from "react-router-dom";
import { Navbar } from "./Components/Navbar";
import { QuizArena, Home, ScoreBoard } from "./Pages";
import { useTheme } from "./Contexts";

function App() {
  const { theme } = useTheme();
  return (
    <div className={theme}>
      <Navbar />
      <Routes>
        <Route path="/" element={<QuizArena />} />
        <Route path="/home" element={<Home />} />
        <Route path="/score" element={<ScoreBoard />} />
      </Routes>
    </div>
  );
}

export default App;
