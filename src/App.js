import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Grid from "./Components/Grid";
import CoursePage from "./Pages/CoursePage";
import TeamPage from "./Pages/TeamPage";
import Header from "./Components/Header";
function App() {
  return (
    <div className="App">
      {/* <TeamPage /> */}
      <Router>
        <Header />
        <div>
          <Routes>
            <Route path="/" element={<TeamPage />} />
            <Route path="/coursePage" element={<CoursePage />} />
          </Routes>
        </div>
        {/* <Footer /> */}
      </Router>
    </div>
  );
}

export default App;
