import "./App.css";

import Exam from "./pages/Exam/Exam";
import ExamDetails from "./pages/ExamDetails/ExamDetails";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ResultPage from "./pages/ResultPage/Pages";

function App() {
  return (
    <Router>

    <Routes>
      <Route path="/" element={<ExamDetails />} />
        <Route path="/exam" element={<Exam />} />
        <Route path="/result" element={<ResultPage />} />
      

   
    </Routes>
 
   </Router>
  );
}

export default App;
