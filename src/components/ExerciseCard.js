import exerciseIcon from "../images/icon-exercise.svg";
import ellipsis from "../images/icon-ellipsis.svg";
import data from "../data.json";

const ExerciseCard = () => {
  return (
    <div className="container">
      <div className="exercise-graphic">
        <img className="icon" src={exerciseIcon} alt="exercise icon"></img>

        <div className="info">
          <div className="title">
            <h4>{data[3].title}</h4>
            <img className="ellipsis" src={ellipsis} alt="ellipsis icon"></img>
          </div>
          <div className="current-hours">
            <h2>{data[3].timeframes.daily.current}</h2>
          </div>
          <div className="previous-hours">
            <p>Last Week - {data[3].timeframes.daily.previous}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExerciseCard;
