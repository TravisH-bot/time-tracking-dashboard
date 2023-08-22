import profileImage from "../images/image-jeremy.png";

const ProfileCard = (props) => {
  const times = ["Daily", "Weekly", "Monthly"];

  return (
    <div className="profile-container">
      <div className="interval">
        {times.map((item) => {
          const styles =
            props.timeframe === item
              ? { fontWeight: 500, color: "#fff" }
              : null;

          return (
            <button
              id={item}
              className="link"
              onClick={props.handleClick}
              style={styles}
            >
              {item}
            </button>
          );
        })}
        <div className="user-info">
          <img
            className="user-image"
            src={profileImage}
            alt="user profile image"
          ></img>
          <h5 className="report">Report for</h5>
          <h1>Jeremy Robson</h1>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
