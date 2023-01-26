import { AnimatePresence } from "framer-motion";

import { ImageHanger, PictureFrame, ProfileContainer, ProfileDetails, ProfileImage } from "@/styles"

const Profile = ({ profile, setDisabled }) => {
  return (
    <div
        style={{display: "flex", flexDirection: "row", width: "100%", alignItems: "center", justifyContent: "center"}}
    >
      <AnimatePresence mode="popLayout">
        <ProfileContainer
          key={profile.name}
          initial={{ x: "100vw"}}
          animate={{ 
            x: "0%",
            y: "50%",
            translateY: "-50%",
            transition: { duration: 1 } }}
          exit={{ x: "-100vw", transition: { duration: 1 } }}
          onAnimationComplete={() => setDisabled(false)}
        >
          <ImageHanger />
          <PictureFrame>
            <ProfileImage src={profile.image_url} alt="profile-image" />
          </PictureFrame>
          <ProfileDetails>
            <p>Name: {profile.name}</p>
            <p>Age: {profile.age}</p>
            <p>Occupation: {profile.occupation}</p>
            <p>{profile.distance} miles away from you</p>
          </ProfileDetails>
        </ProfileContainer>
      </AnimatePresence>
    </div>
  )
}

export default Profile