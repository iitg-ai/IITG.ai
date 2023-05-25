import "./App.css";
import "./Components/HoverMessage.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CoursePage from "./Pages/CoursePage";
import LandingPage from "./Pages/LandingPage";
import Footer from "./ConstantComponents/Footer";
import Leaderboard from "./Pages/Leaderboard";

function App() {
  return (
    <div className={`App bg-black bg-no-repeat`}>
      <div id="hover" className="hoverMessage"></div>

      {/* <TeamPage /> */}
      <Router>
        <div className="pb-60">
          <Routes>
            <Route path="/" element={<LandingPage />} />
            {/* <Route path="/team" element={<TeamPage />} /> */}
            <Route path="/coursePage" element={<CoursePage />} />
            <Route path="/coursePage/leaderboard" element={<Leaderboard />} />
          </Routes>
        </div>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
