import { Navbar } from "@/components/ui/Navbar";
import RateProfiles from "@/pages/RateProfile/RateProfile";
import { ProfilesProvider } from "@/context/ProfilesContext";

import styles from "./App.module.css";

function App() {
  return (
    <ProfilesProvider>
      <div className={styles.appContainer}>
        <Navbar />
        <RateProfiles />
      </div>
    </ProfilesProvider>
  );
}

export default App;
