import "../App.css";
import workIcon from "../images/icon-work.svg";
import playIcon from "../images/icon-play.svg";
import studyIcon from "../images/icon-study.svg";
import exerciseIcon from "../images/icon-exercise.svg";
import socialIcon from "../images/icon-social.svg";
import selfCareIcon from "../images/icon-self-care.svg";
import ellipsis from "../images/icon-ellipsis.svg";

const TrackerCard = (props) => {
  const icons = [
    workIcon,
    playIcon,
    studyIcon,
    exerciseIcon,
    socialIcon,
    selfCareIcon,
  ];

  const timeConvert =
    props.timeframe === "Daily"
      ? "Yesterday"
      : props.timeframe === "Weekly"
      ? "Last week"
      : "Last month";

  return (
    <div className="container">
      <div className={"graphic-" + props.title.replace(/\s+/g, "")}>
        <img className="icon" src={icons[props.id]} alt="tracker icon"></img>

        <div className="info">
          <div className="title">
            <h4>{props.title}</h4>
            <img className="ellipsis" src={ellipsis} alt="ellipsis icon"></img>
          </div>
          <div className="hours">
            <div className="current-hours">
              <h2>{props.current}hrs</h2>
            </div>
            <div className="previous-hours">
              <p>
                {timeConvert} - {props.previous}hrs
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrackerCard;
