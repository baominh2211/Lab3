import PropTypes from 'prop-types';

function UserProfile({ userData, theme = 'light' }) {
  return (
    <div className={`profile-card theme-${theme}`}>
      <>
        <h2>User Profile</h2>
        <img 
          src={userData.avatarUrl} 
          alt={userData.name}
          width={userData.imageSize}
          height={userData.imageSize}
          className="profile-avatar"
        />
        <p><strong>Name:</strong> {userData.name}</p>
        <p><strong>Email:</strong> {userData.email}</p>
      </>
    </div>
  );
}

UserProfile.propTypes = {
  userData: PropTypes.shape({
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    avatarUrl: PropTypes.string,
    imageSize: PropTypes.number,
  }).isRequired,
  theme: PropTypes.oneOf(['light', 'dark']),
};

export default UserProfile;
