import selfCarelIcon from "../images/icon-self-care.svg";
import ellipsis from "../images/icon-ellipsis.svg";
import data from "../data.json";

const SelfCareCard = () => {
  return (
    <div className="container">
      <div className="self-care-graphic">
        <img className="icon" src={selfCarelIcon} alt="self care icon"></img>

        <div className="info">
          <div className="title">
            <h4>{data[5].title}</h4>
            <img className="ellipsis" src={ellipsis} alt="ellipsis icon"></img>
          </div>
          <div className="current-hours">
            <h2>{data[5].timeframes.daily.current}</h2>
          </div>
          <div className="previous-hours">
            <p>Last Week - {data[5].timeframes.daily.previous}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SelfCareCard;
