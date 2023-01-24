import { Navbar } from '@/components/ui/Navbar'
import RateProfiles from '@/pages/RateProfile/RateProfiles'
import { ProfilesProvider } from '@/context/ProfilesContext'

import './App.css'

function App() {
  return (
    <ProfilesProvider>
      <Navbar />
      <RateProfiles />
    </ProfilesProvider>
  )
}

export default App
