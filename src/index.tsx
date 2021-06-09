import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import "./index.css";
import App from "./App";
import { QuizProvider, ThemeProvider } from "./Contexts";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <ThemeProvider>
        <QuizProvider>
          <App />
        </QuizProvider>
      </ThemeProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
