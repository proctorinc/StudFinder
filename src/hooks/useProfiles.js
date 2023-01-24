import { useContext } from "react";

import ProfilesContext from "@/context/ProfilesContext";

const useProfiles = () => {
  return useContext(ProfilesContext);
};

export default useProfiles;
