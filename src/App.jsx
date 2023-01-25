import { Navbar } from '@/components/ui/Navbar'
import RateProfiles from '@/pages/RateProfile/RateProfiles'
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
