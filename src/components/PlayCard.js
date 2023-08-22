import playIcon from "../images/icon-play.svg";
import ellipsis from "../images/icon-ellipsis.svg";
import data from "../data.json";

const PlayCard = () => {
  return (
    <div className="container">
      <div className="play-graphic">
        <img className="icon" src={playIcon} alt="play icon"></img>

        <div className="info">
          <div className="title">
            <h4>{data[1].title}</h4>
            <img className="ellipsis" src={ellipsis} alt="ellipsis icon"></img>
          </div>
          <div className="current-hours">
            <h2>{data[1].timeframes.daily.current}</h2>
          </div>
          <div className="previous-hours">
            <p>Last Week - {data[1].timeframes.daily.previous}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlayCard;
