const Profile = ({ user }) => {
  return (
    <>
      <img src={user.image_url} alt="profile-image" />
      <div>
        <h3>Name: {user.name}</h3>
        <h3>Age: {user.age}</h3>
        <h3>Occupation: {user.occupation}</h3>
        <h3>{user.distance} miles away from you</h3>
      </div>
    </>
  )
}

export default Profile