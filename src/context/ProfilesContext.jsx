import { createContext, useState } from "react";

import { generateRandomProfiles } from "@/utils";

const ProfilesContext = createContext();

export const ProfilesProvider = ({ children }) => {
  const [profileIndex, setProfileIndex] = useState(0);
  const [profiles, setProfiles] = useState([])
  const currentProfile = profiles[profileIndex];

  if (profiles.length === 0) {
    const randomProfiles = generateRandomProfiles()
    setProfiles(randomProfiles)
  }

  const getNextProfile = () => {
    setProfileIndex((index) => index + 1 > profiles.length - 1 ? 0 : index + 1);
  };

  const contextData = {
    currentProfile,
    getNextProfile,
  };

  return (
    <ProfilesContext.Provider value={contextData}>
      {children}
    </ProfilesContext.Provider>
  );
};

export default ProfilesContext;
