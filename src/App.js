import "./App.css";
import ProfileCard from "./components/ProfileCard";
import WorkCard from "./components/WorkCard";
import PlayCard from "./components/PlayCard";
import StudyCard from "./components/StudyCard";
import ExerciseCard from "./components/ExerciseCard";
import SocialCard from "./components/SocialCard";
import SelfCareCard from "./components/SelfCareCard";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <div className="main-container">
        <ProfileCard />
        <div className="cards">
          <div className="top-cards">
            <WorkCard />
            <PlayCard />
            <StudyCard />
          </div>
          <div className="bottom-cards">
            <ExerciseCard />
            <SocialCard />
            <SelfCareCard />
          </div>
        </div>
      </div>
      {/* <Footer /> */}
    </div>
  );
}

export default App;
