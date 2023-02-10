import { createContext, useEffect, useState } from "react";

import { getRandomDistance, getRandomOccupation } from "@/utils";

const ProfilesContext = createContext();

export const ProfilesProvider = ({ children }) => {
  const [currentProfile, setCurrentProfile] = useState();
  const [numberUsersRated, setNumberUsersRated] = useState(1);
  const isLoading = currentProfile === undefined;
  const [seed, _] = useState((Math.random() + 1).toString(36).substring(7));

  const getNextProfile = () => {
    fetchNewProfile(numberUsersRated + 1);
    setNumberUsersRated((previous) => previous + 1);
  };

  const fetchNewProfile = (page) => {
    fetch(
      `https://randomuser.me/api/?nat=US&inc=gender,name,picture,dob&page=${page}&seed=${seed}`
    )
      .then((response) => response.json())
      .then((data) => {
        const profileData = data.results[0];
        const userProfile = {
          name: `${profileData.name.first} ${profileData.name.last}`,
          gender: profileData.gender,
          picture: profileData.picture.large,
          age: profileData.dob.age,
          distance: getRandomDistance(),
          occupation: getRandomOccupation(),
        };
        setCurrentProfile(userProfile);
      })
      .catch((err) => console.error(err));
  };

  useEffect(() => {
    fetchNewProfile(numberUsersRated);
  }, []);

  const contextData = {
    currentProfile,
    getNextProfile,
    isLoading,
  };

  return (
    <ProfilesContext.Provider value={contextData}>
      {children}
    </ProfilesContext.Provider>
  );
};

export default ProfilesContext;
