import { createContext, useState } from "react";

import { mockProfiles } from "@/__mocks__/profiles";

const ProfilesContext = createContext();

export const ProfilesProvider = ({ children }) => {
  const [profileIndex, setProfileIndex] = useState(0);
  const currentProfile = mockProfiles[profileIndex];

  const getNextProfile = () => {
    setProfileIndex((index) => index + 1 > mockProfiles.length - 1 ? 0 : index + 1);
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
