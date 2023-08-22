import profileImage from "../images/image-jeremy.png";

const ProfileCard = () => {
  return (
    <div className="profile-container">
      <div className="interval">
        <p>Monthly</p>
        <p>Weekly</p>
        <p>Daily</p>
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
