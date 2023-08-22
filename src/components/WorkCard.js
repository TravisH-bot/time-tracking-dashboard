import workIcon from "../images/icon-work.svg";
import ellipsis from "../images/icon-ellipsis.svg";
import data from "../data.json";

const WorkCard = () => {
  return (
    <div className="container">
      <div className="work-graphic">
        <img className="icon" src={workIcon} alt="work icon"></img>

        <div className="info">
          <div className="title">
            <h4>{data[0].title}</h4>
            <img className="ellipsis" src={ellipsis} alt="ellipsis icon"></img>
          </div>
          <div className="current-hours">
            <h2>{data[0].timeframes.daily.current}</h2>
          </div>
          <div className="previous-hours">
            <p>Last Week - {data[0].timeframes.daily.previous}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkCard;
