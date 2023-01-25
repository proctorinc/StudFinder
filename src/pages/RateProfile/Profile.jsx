import { ImageHanger, ProfileDetails, ProfileImage } from "@/styles"

const Profile = ({ profile }) => {
  return (
    <>
      <ImageHanger />
      <ProfileImage src={profile.image_url} alt="profile-image" />
      <ProfileDetails>
        <p>Name: {profile.name}</p>
        <p>Age: {profile.age}</p>
        <p>Occupation: {profile.occupation}</p>
        <p>{profile.distance} miles away from you</p>
      </ProfileDetails>
    </>
  )
}

export default Profile