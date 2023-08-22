import socialIcon from "../images/icon-social.svg";
import ellipsis from "../images/icon-ellipsis.svg";
import data from "../data.json";

const SocialCard = () => {
  return (
    <div className="container">
      <div className="social-graphic">
        <img className="icon" src={socialIcon} alt="social icon"></img>

        <div className="info">
          <div className="title">
            <h4>{data[4].title}</h4>
            <img className="ellipsis" src={ellipsis} alt="ellipsis icon"></img>
          </div>
          <div className="current-hours">
            <h2>{data[4].timeframes.daily.current}</h2>
          </div>
          <div className="previous-hours">
            <p>Last Week - {data[4].timeframes.daily.previous}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SocialCard;
