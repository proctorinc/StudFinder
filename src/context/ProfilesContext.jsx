import { createContext, useState } from "react";
import { faker } from "@faker-js/faker";
import { mockProfiles } from "@/__mocks__/profiles";

const ProfilesContext = createContext();

export const ProfilesProvider = ({ children }) => {
  const [profileIndex, setProfileIndex] = useState(0);
  const [profiles, setProfiles] = useState([])
  const currentProfile = profiles[profileIndex];

  const generateProfiles = () => {
    const profiles = []
  
    for (let i = 0; i < 11; i++) {
      const gender = Math.floor(Math.random() * 2) === 0 ? "Male" : "Female"
      profiles.push({
        image_url: `profile${i + 1}.jpg`,
        name: faker.name.fullName(),
        occupation: Math.floor(Math.random() * 2) === 0 ? "Plumber" : "Construction Worker",
        gender: gender,
        age: Math.floor(Math.random() * 40) + 25,
        distance: Math.floor(Math.random() * 500),
      })
    }
    setProfiles(mockProfiles)
  }

  if (profiles.length === 0) {
    generateProfiles()
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
