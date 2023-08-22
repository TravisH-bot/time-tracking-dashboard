import studyIcon from "../images/icon-study.svg";
import ellipsis from "../images/icon-ellipsis.svg";
import data from "../data.json";

const StudyCard = () => {
  return (
    <div className="container">
      <div className="study-graphic">
        <img className="icon" src={studyIcon} alt="study icon"></img>

        <div className="info">
          <div className="title">
            <h4>{data[2].title}</h4>
            <img className="ellipsis" src={ellipsis} alt="ellipsis icon"></img>
          </div>
          <div className="current-hours">
            <h2>{data[2].timeframes.daily.current}</h2>
          </div>
          <div className="previous-hours">
            <p>Last Week - {data[2].timeframes.daily.previous}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudyCard;
