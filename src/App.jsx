import { Navbar } from '@/components/ui/Navbar'
import RateProfiles from '@/pages/RateProfile/RateProfile'
import { ProfilesProvider } from '@/context/ProfilesContext'

function App() {
  return (
    <ProfilesProvider>
      <Navbar />
      <RateProfiles />
    </ProfilesProvider>
  )
}

export default App
