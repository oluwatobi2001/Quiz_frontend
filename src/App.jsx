import "./App.css";

import Exam from "./pages/Exam/Exam";
import ExamDetails from "./pages/ExamDetails/ExamDetails";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ResultPage from "./pages/ResultPage/Pages";
import LeaderboardDetails from "./pages/Leaderboard/Leaderboard";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import Welcome from "./pages/welcome/Welcome";

function App() {
  return (
    <Router>

    <Routes>
      <Route path="/" element={<ExamDetails />} />
        <Route path="/exam" element={<Exam />} />
        <Route path="/welcome" element={<Welcome />} />
        <Route path="/result" element={<ResultPage />} />
        <Route path="/leaderboard" element={<LeaderboardDetails />} />
      <Route path="/login"  element={<Login />}/>
      <Route path="/register"  element={<Register />}/>
      

   
    </Routes>
 
   </Router>
  );
}

export default App;
