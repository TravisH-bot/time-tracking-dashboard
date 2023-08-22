import "./App.css";
import { useState } from "react";
import data from "./data.json";
import TrackerCard from "./components/TimeCard";
import ProfileCard from "./components/ProfileCard";
import Footer from "./components/Footer";

function App() {
  const [timeframe, setTimeframe] = useState("Daily");

  const handleClick = (e) => {
    setTimeframe(e.target.innerText);
  };

  return (
    <div className="App">
      <div className="main-container">
        <ProfileCard handleClick={handleClick} timeframe={timeframe} />

        <div className="cards">
          {data.map((item, index) => {
            return (
              <TrackerCard
                key={index}
                id={index}
                title={item.title}
                current={item["timeframes"][timeframe.toLowerCase()]["current"]}
                previous={
                  item["timeframes"][timeframe.toLowerCase()]["previous"]
                }
                timeframe={timeframe}
              />
            );
          })}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
