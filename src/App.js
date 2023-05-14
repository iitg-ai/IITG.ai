import "./App.css";
import "./Components/HoverMessage.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CoursePage from "./Pages/CoursePage";
import TeamPage from "./Pages/TeamPage";
import Header from "./ConstantComponents/Header";
import LandingPage from "./Pages/LandingPage";
import Footer from "./ConstantComponents/Footer";

// ("bg-[url('/images/Bg.svg')]");
function App() {
  return (
    <div className="App bg-[url('/images/Bg.svg')] bg-black bg-no-repeat">
      <div id="hover" className="hoverMessage"></div>

      {/* <TeamPage /> */}
      <Router>
        <Header />
        <div className="pb-60">
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/team" element={<TeamPage />} />
            <Route path="/coursePage" element={<CoursePage />} />
          </Routes>
        </div>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
